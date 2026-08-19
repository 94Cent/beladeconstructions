function ImagePlaceholder({ label, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-brand-navy/10 bg-[linear-gradient(135deg,#f6efe3_0%,#dce6f3_100%)] ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.28),transparent_32%)]" />
      <div className="absolute inset-6 rounded-[1.35rem] border border-white/70" />
      <div className="absolute bottom-6 left-6 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-navy shadow-sm">
        {label}
      </div>
    </div>
  );
}

export default ImagePlaceholder;
