type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading${centered ? " section-heading--centered" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <div className="section-description">{description}</div> : null}
    </div>
  );
}
