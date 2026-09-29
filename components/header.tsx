import Image from "next/image";
import Link from "next/link";

const navigation = [
  ["Services", "#services"],
  ["How it works", "#how-it-works"],
  ["Pharmacies", "#pharmacies"],
  ["FAQs", "#faqs"]
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link href="#top" className="brand-link" aria-label="Kituo Cha Chanjo home">
          <Image
            src="/assets/county-mark.png"
            alt="Kituo Cha Chanjo — Chanjo ya HPV inapatikana hapa"
            width={206}
            height={47}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
          <Link className="nav-cta" href="#pharmacies">
            Find a pharmacy
          </Link>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <Image src="/assets/menu.svg" alt="" width={41} height={42} />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
