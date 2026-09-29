import fs from "node:fs/promises";

const width = Number(process.argv[2] ?? 390);
const output = process.argv[3] ?? `/tmp/kenya-${width}.png`;
const metricsOnly = process.argv.includes("--metrics-only");
const pages = await fetch("http://127.0.0.1:9222/json/list").then((response) => response.json());
const target = pages.find((page) => page.type === "page");

if (!target) {
  throw new Error("No Chrome page target is available.");
}

const socket = new WebSocket(target.webSocketDebuggerUrl);
const pending = new Map();
const browserMessages = [];
let messageId = 0;

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.method === "Runtime.consoleAPICalled") {
    const level = message.params.type;
    if (["warning", "error"].includes(level)) {
      browserMessages.push({
        level,
        text: message.params.args.map((argument) => argument.value ?? argument.description ?? "").join(" ")
      });
    }
  }
  if (message.method === "Log.entryAdded" && ["warning", "error"].includes(message.params.entry.level)) {
    browserMessages.push({ level: message.params.entry.level, text: message.params.entry.text });
  }
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

function command(method, params = {}) {
  const id = ++messageId;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

await command("Page.enable");
await command("Runtime.enable");
await command("Log.enable");
await command("Network.enable");
await command("Network.setCacheDisabled", { cacheDisabled: true });
await command("Runtime.discardConsoleEntries");
await command("Log.clear");
await command("Emulation.setDeviceMetricsOverride", {
  width,
  height: 900,
  deviceScaleFactor: 1,
  mobile: width < 768,
  screenWidth: width,
  screenHeight: 900
});
await command("Page.navigate", { url: "about:blank" });
await new Promise((resolve) => setTimeout(resolve, 150));
browserMessages.length = 0;
await command("Runtime.discardConsoleEntries");
await command("Log.clear");
await command("Page.navigate", { url: `http://127.0.0.1:3000/?qa=${Date.now()}` });
await new Promise((resolve) => setTimeout(resolve, 1800));

if (!metricsOnly) {
  await command("Runtime.evaluate", {
    expression: `(async () => {
      const pause = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
      for (let y = 0; y < document.documentElement.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await pause(140);
      }
      window.scrollTo(0, 0);
      await pause(3000);
    })()`,
    awaitPromise: true
  });
}

const metrics = await command("Runtime.evaluate", {
  expression: `(() => ({
    viewportWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    height: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
    headerHeight: document.querySelector('.site-header')?.getBoundingClientRect().height,
    heroHeight: document.querySelector('.hero')?.getBoundingClientRect().height,
    footerBottom: document.querySelector('.site-footer')?.getBoundingClientRect().bottom
  }))()`,
  returnByValue: true
});
const pageMetrics = metrics.result.value;
if (!metricsOnly) {
  const screenshot = await command("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: true,
    fromSurface: true,
    clip: {
      x: 0,
      y: 0,
      width,
      height: Math.ceil(pageMetrics.height),
      scale: 1
    }
  });
  await fs.writeFile(output, Buffer.from(screenshot.data, "base64"));
}

socket.close();
process.stdout.write(`${JSON.stringify({ width, output: metricsOnly ? null : output, ...pageMetrics, browserMessages })}\n`);
