type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

const SectionHeading = ({
  id,
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) => (
  <div className={`section-heading section-heading--${align}`}>
    <p className="section-heading__eyebrow">{eyebrow}</p>
    <h2 id={id} className="section-heading__title">
      {title}
    </h2>
    {description && <p className="section-heading__description">{description}</p>}
  </div>
);

export default SectionHeading;

