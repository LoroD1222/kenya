import Image from "next/image";
import Link from "next/link";
import { FaqList, type Faq } from "@/components/faq-list";
import { Header } from "@/components/header";
import { PharmacyCard, type Pharmacy } from "@/components/pharmacy-card";
import { SectionHeading } from "@/components/section-heading";

const serviceLinks = [
  ["Pharmacy Locations", "#pharmacies"],
  ["Opening Hours", "#pharmacies"],
  ["Available Vaccines", "#vaccine"],
  ["How It Works", "#how-it-works"],
  ["Frequently Asked Questions", "#faqs"]
] as const;

const pharmacies: Pharmacy[] = [
  { name: "Agmart Pharmacy", address: "Hinga road, Kangemi Stage, off Waiyaki way" },
  {
    name: "Goodlife BBS Mall",
    address: "Business Bay Square (BBS) Mall, General Waruinge St.",
    hours: "Saturday, 09:00 - 16:00"
  },
  {
    name: "White Cross Pharmacy",
    address: "Imani Plaza ground floor, Seasons road, off Kasarani-Mwiki road",
    hours: "Saturday, 09:00 - 16:00"
  },
  { name: "Goodlife Eastgate", address: "Naivas Eastgate, Manyanja Road", hours: "Saturday, 09:00 - 16:00" },
  {
    name: "Goodlife Greenspan",
    address: "Greenspan mall, Lower Savannah Dakar Rd",
    hours: "Saturday, 09:00 - 16:00"
  },
  {
    name: "Goodlife Southfield Mall",
    address: "Southfield mall, Airport North Road",
    hours: "Saturday, 09:00 - 16:00"
  },
  { name: "Canaan Pharmacy Point Mall", address: "The Point Mall, Rabai Road, Buru-Buru", hours: "Saturday, 09:00 - 16:00" },
  {
    name: "Edipharm Pharmaceuticals",
    address: "Off Corner Stage, Towards Kayole One, Nairobi",
    hours: "Saturday, 09:00 - 16:00"
  },
  {
    name: "Lucky Summer Chemist",
    address: "Lucky Summer Road, Nairobi, next to Game changers lounge",
    hours: "Saturday, 09:00 - 16:00"
  },
  {
    name: "Mambo Care Pharmacy",
    address: "Ndururuno, Huruma, Off Mathare road",
    hours: "Saturday, 09:00 - 16:00"
  }
];

const faqs: Faq[] = [
  {
    question: "Is this service really free?",
    answer:
      "Yes, the HPV vaccine is provided for free in the participating pharmacies, supported by the Ministry of Health, Nairobi City County and PSI."
  },
  {
    question: "Are the vaccines safe and identical to government vaccines?",
    answer:
      "Yes. The vaccines supplied to participating pharmacies come directly from the government vaccine supply, ensuring correct cold-chain and are identical to those administered in public hospitals and health centers."
  },
  {
    question: "Who will administer the injection?",
    answer:
      "Qualified and registered nurses certified by the Ministry of Health and working for Nairobi City County administer vaccinations on-site at participating pharmacies."
  },
  { question: "Which vaccines can I get?", answer: "HPV vaccine for girls aged 10–14." },
  {
    question: "Do I need to book an appointment in advance?",
    answer:
      "Yes. You can book an appointment by calling the pharmacy directly, walk in and make an appointment, or through a referral from a local community health worker."
  },
  {
    question: "Who is eligible for this service?",
    answer:
      "Adolescent girls aged 10–14 (for HPV vaccine) and children under 5 years (for routine childhood immunizations). These vaccines are free and available to anyone who meets the age requirements."
  },
  {
    question: "What is the HPV vaccine and who is it for?",
    answer:
      "The HPV vaccine protects against human papillomavirus and cervical cancer. It is available for free for adolescent girls aged 10–14."
  },
  {
    question: "Does the HPV vaccine have harmful side-effects?",
    answer:
      "No, the HPV vaccine, like all government approved vaccines, does not have harmful side-effects. The HPV vaccine simply prevents cervical cancer, which is one of the leading causes of cancer among women."
  }
];

const bookingSteps = [
  ["Walk in at the pharmacy", "Visit during opening hours and make an appointment on the spot"],
  ["Book by phone", "Call a participating pharmacy directly to reserve a convenient time."],
  ["Ask a community health promoter", "A local community health promoter (CHP) can refer you and help you book."]
] as const;

function PartnerBadge() {
  return (
    <div className="partner-badge" aria-label="Nairobi — endorsed by Nairobi City County and PSI">
      <Image src="/assets/kenya-flag.png" alt="Kenya" width={17} height={17} />
      <span>Nairobi · Endorsed by Nairobi City County &amp; PSI</span>
      <Image src="/assets/county-logo.png" alt="Nairobi City County" width={21} height={21} />
      <Image src="/assets/brand-logo.png" alt="PSI" width={19} height={19} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <Image className="hero-background" src="/assets/hero-bg.png" alt="" fill priority sizes="100vw" />
          <Image
            className="hero-pattern"
            src="/assets/hero-pattern.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1440px) 60vw, 100vw"
          />
          <div className="site-container hero-inner">
            <div className="hero-copy">
              <PartnerBadge />
              <h1 id="hero-title">
                Chanjo ya HPV
                <br />
                inapatikana hapa
              </h1>
              <p className="hero-subtitle">Convenient, Safe Immunization at Your Local Pharmacy</p>
              <Image className="accent-line" src="/assets/accent-line.png" alt="" width={692} height={15} />
              <p className="hero-body">
                Protecting your family&apos;s health is now easier than ever. Through our partnership with the Ministry of Health
                and Nairobi City County, certified nurses are available at participating pharmacies across Nairobi to provide
                free HPV vaccinations for adolescent girls aged 10–14. You can book an appointment conveniently by walking into
                a pharmacy, calling or liaising with your local community health worker.
              </p>
            </div>

            <div className="hero-action">
              <Image
                className="hero-shield"
                src="/assets/hero-pharmacy.png"
                alt="A family and a nurse at a participating pharmacy"
                width={231}
                height={270}
                priority
              />
              <Link className="primary-button" href="#pharmacies">
                <span>Find a pharmacy near you</span>
                <Image src="/assets/button-arrow.svg" alt="" width={20} height={20} />
              </Link>
              <p className="hotline-inline">
                Nairobi County Hotline <strong>1508</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="service-overview" id="services" aria-labelledby="services-title">
          <div className="site-container service-overview-inner">
            <div className="services-copy">
              <SectionHeading
                eyebrow="Participating pharmacies"
                title="Find Services Near You"
                description="Find participating pharmacies, check opening hours, and get answers to your questions."
              />
              <nav className="service-links" aria-label="Page sections">
                {serviceLinks.map(([label, href]) => (
                  <Link key={`${href}-${label}`} href={href}>
                    <span>{label}</span>
                    <Image src="/assets/arrow-right.svg" alt="" width={20} height={20} />
                  </Link>
                ))}
              </nav>
            </div>
            <div className="feature-image feature-image--family">
              <Image
                src="/assets/family-care.png"
                alt="A nurse speaking with a family in a pharmacy"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="vaccine-section" id="vaccine" aria-labelledby="vaccine-title">
          <div className="site-container vaccine-card">
            <div className="vaccine-card-heading">
              <span className="vaccine-icon-wrap">
                <Image src="/assets/icon-circle.svg" alt="" fill sizes="58px" />
                <Image src="/assets/vaccine-icon.png" alt="" width={23} height={44} />
              </span>
              <div>
                <p className="eyebrow">Vaccine available through</p>
                <h2 id="vaccine-title">Kituo Cha Chanjo</h2>
              </div>
            </div>
            <div className="vaccine-details">
              <span className="vaccine-icon-wrap">
                <Image src="/assets/icon-circle.svg" alt="" fill sizes="58px" />
                <Image src="/assets/vaccine-icon.png" alt="" width={23} height={44} />
              </span>
              <div>
                <h3>HPV Vaccine</h3>
                <p className="vaccine-free">Free · Girls aged 10–14</p>
                <p>Protects adolescent girls against cervical cancer and other HPV-related diseases.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="how-section" id="how-it-works" aria-labelledby="how-title">
          <div className="site-container">
            <SectionHeading eyebrow="How it works" title="Choose the Easiest Way for You" />
            <div className="booking-steps">
              {bookingSteps.map(([title, copy], index) => (
                <div key={title} className="booking-step-group">
                  <article className="booking-step">
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                  {index < bookingSteps.length - 1 ? (
                    <div className="or-divider" aria-hidden="true">
                      <span>OR</span>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="feature-image feature-image--pharmacists">
          <Image
            src="/assets/pharmacist-family.png"
            alt="A pharmacist and a community health promoter at a participating pharmacy"
            fill
            sizes="100vw"
          />
        </div>

        <section className="directory-section" id="pharmacies" aria-labelledby="pharmacies-title">
          <div className="site-container">
            <SectionHeading
              eyebrow="Participating pharmacies: Nairobi"
              title="Find a Pharmacy Near You"
              description={
                <>
                  <p>
                    10 pharmacies across Nairobi. <strong>Nurse clinics run Saturdays 09:00–16:00.</strong>
                  </p>
                  <p>See contact and direction details:</p>
                </>
              }
            />
            <div className="pharmacy-grid">
              {pharmacies.map((pharmacy, index) => (
                <PharmacyCard key={pharmacy.name} pharmacy={pharmacy} index={index + 1} />
              ))}
            </div>
          </div>
        </section>

        <div className="feature-image feature-image--community">
          <Image
            src="/assets/pharmacy-team.png"
            alt="A family, pharmacist, and healthcare team inside a participating pharmacy"
            fill
            sizes="100vw"
          />
        </div>

        <section className="faq-section" id="faqs" aria-labelledby="faq-title">
          <div className="site-container faq-layout">
            <SectionHeading eyebrow="Questions about the service" title="Answers you can trust" />
            <FaqList faqs={faqs} />
          </div>
        </section>

        <div className="feature-image feature-image--help">
          <Image src="/assets/team-help.png" alt="A healthcare programme team member in a pharmacy" fill sizes="100vw" />
        </div>

        <section className="help-section" aria-labelledby="help-title">
          <div className="site-container">
            <SectionHeading
              eyebrow="Questions about the programme?"
              title="Our Teams are Ready to Help"
              description="This programme is brought to you by PSI in partnership with the Nairobi City County and the Ministry of Health. Reach out below, or visit your nearest participating pharmacy."
            />
            <a className="hotline-button" href="tel:1508">
              <Image src="/assets/phone.svg" alt="" width={14} height={14} />
              Nairobi City County Hotline - 1508
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-inner">
          <div className="footer-brand-row">
            <Image
              className="footer-logo"
              src="/assets/psi-logo.png"
              alt="Kituo Cha Chanjo"
              width={81}
              height={98}
            />
            <div className="footer-partners" aria-label="Programme partners">
              <Image src="/assets/italy-flag.png" alt="Partner flag" width={17} height={17} />
              <Image src="/assets/partner-logo.png" alt="Programme partner" width={20} height={20} />
              <Image src="/assets/kenya-flag.png" alt="Kenya" width={17} height={17} />
            </div>
          </div>
          <p className="footer-summary">Pharmacy-based immunisation bringing free HPV protection closer to communities across Nairobi</p>
          <div className="footer-divider-wrap" aria-hidden="true">
            <Image className="footer-divider" src="/assets/footer-divider.svg" alt="" width={360} height={1} />
          </div>
          <p className="footer-smallprint">
            Kituo Cha Chanjo is delivered by Population Services International (PSI) in partnership with Nairobi City County and
            the Ministry of Health. This page is for public information only and is not medical advice. Vaccine availability,
            eligibility and opening hours may change - please confirm with the pharmacy.
          </p>
        </div>
      </footer>
    </>
  );
}
