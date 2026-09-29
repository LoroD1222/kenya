import Image from "next/image";

export type Faq = {
  question: string;
  answer: string;
};

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq-list">
      {faqs.map((faq) => (
        <details open key={faq.question} className="faq-item">
          <summary>
            <span>{faq.question}</span>
            <Image src="/assets/chevron.svg" alt="" width={17} height={9} />
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
