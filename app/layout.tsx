import type { Metadata } from "next";
import "@fontsource/dosis/500.css";
import "@fontsource/dosis/600.css";
import "@fontsource/dosis/700.css";
import "@fontsource/figtree/400.css";
import "@fontsource/figtree/600.css";
import "@fontsource/figtree/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kituo Cha Chanjo | Free HPV Vaccination in Nairobi",
  description:
    "Find participating Nairobi pharmacies offering free HPV vaccination for girls aged 10–14 through Kituo Cha Chanjo.",
  openGraph: {
    title: "Kituo Cha Chanjo",
    description: "Free, safe HPV vaccination at participating pharmacies across Nairobi.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
