import heroShape from "../assets/hero.png";

function PageHero({ eyebrow, title, description, stats = [] }) {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(200,155,60,0.35),transparent_60%)]" />
      <div className="section-frame relative grid gap-12 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
        <div className="max-w-3xl">
          <p className="section-kicker text-brand-gold">{eyebrow}</p>
          <h1 className="mt-5 text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            {description}
          </p>
          {stats.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
                >
                  <p className="text-3xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-8 h-24 w-24 rounded-full border border-brand-gold/40" />
          <div className="absolute right-8 top-0 h-14 w-14 rounded-full bg-brand-gold/70 blur-xl" />
          <div className="dark-panel relative overflow-hidden p-8 sm:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-brand-gold" />
            <p className="section-kicker text-brand-gold">Project Momentum</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Thoughtful design, solid delivery, stronger first impression.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              This refresh leans into confidence and clarity: cleaner hierarchy,
              premium spacing, and a visual tone that feels established.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white/6 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">
                  Signature
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Warm metallic accents
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-white/6 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">
                  Feel
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Editorial and modern
                </p>
              </div>
            </div>
            <img
              src={heroShape}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 right-0 w-44 opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
