function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}

export default SectionHeader;
