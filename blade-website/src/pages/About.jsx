import { Link } from "react-router";
import ImagePlaceholder from "../components/ImagePlaceholder";

const values = [
  {
    number: "01",
    title: "Quality",
    description:
      "We maintain high professional standards throughout planning, procurement, construction and project delivery.",
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "We conduct our operations with honesty, accountability and respect for our clients and partners.",
  },
  {
    number: "03",
    title: "Safety",
    description:
      "We promote responsible working practices that protect our employees, contractors, clients and communities.",
  },
  {
    number: "04",
    title: "Professionalism",
    description:
      "We approach every project with careful planning, technical competence and attention to detail.",
  },
  {
    number: "05",
    title: "Collaboration",
    description:
      "We work closely with clients, consultants and project stakeholders to achieve shared objectives.",
  },
  {
    number: "06",
    title: "Lasting Value",
    description:
      "We aim to deliver functional and durable developments that provide long-term value to our clients.",
  },
];

const projectStages = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin by understanding the client's vision, objectives, requirements, budget and proposed timeline.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Our team develops an appropriate project strategy, scope of work and implementation plan.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Construction activities are professionally coordinated with attention to quality, safety and efficiency.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "The completed project is reviewed and handed over in accordance with the agreed requirements.",
  },
];

function About() {
  return (
    <div>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="section-frame relative flex min-h-[55vh] items-center py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-gold">
              About Belade Construction
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Building trust through quality construction
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              We provide dependable construction, engineering and
              project-management solutions designed to transform our clients'
              ideas into valuable developments.
            </p>
          </div>
        </div>
      </section>

      <section className="section-frame py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
              A dependable construction and engineering partner
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Belade Construction is committed to delivering professional
              construction and engineering services across residential,
              commercial and industrial developments.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our approach combines careful planning, technical coordination,
              responsible site management and transparent communication. We
              collaborate with clients, consultants, contractors and other
              stakeholders to ensure that every project is executed effectively.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From initial consultation and project planning to construction
              and final delivery, our objective is to provide reliable solutions
              that meet our clients' requirements and create lasting value.
            </p>

            <Link to="/contact" className="mt-8 inline-flex button-outline">
              Speak With Our Team
            </Link>
          </div>

          <div className="relative">
            <ImagePlaceholder
              label="Belade Construction team working on a construction project"
              className="min-h-[500px]"
            />

            <div className="absolute -bottom-8 left-0 max-w-sm rounded-[1.5rem] bg-brand-gold p-7 text-brand-charcoal shadow-xl sm:left-8">
              <p className="text-xl font-bold">
                Delivering projects with quality, safety and professionalism
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist/60 py-20 lg:py-28">
        <div className="section-frame grid gap-8 md:grid-cols-2">
          <article className="dark-panel p-8 sm:p-12">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Our Mission
            </span>

            <h2 className="mt-5 text-3xl font-bold">
              To deliver high-quality construction services
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Our mission is to deliver high-quality construction services with integrity,
              innovation, and excellence while exceeding our clients expectations on every
              project.
            </p>
          </article>

          <article className="soft-panel p-8 sm:p-12">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Our Vision
            </span>

            <h2 className="mt-5 text-3xl font-bold text-brand-navy">
              To help make your dream home a reality.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Our vision is to help make your dream home a reality by providing exceptional construction services that
              exceed your expectations. We strive to be the leading construction company in the industry,
              known for our commitment to quality, innovation, and customer satisfaction.
            </p>
          </article>
        </div>
      </section>

      <section className="section-frame py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
            Our Core Values
          </p>

          <h2 className="mt-4 text-3xl font-bold text-brand-navy sm:text-4xl lg:text-5xl">
            The principles that guide our work
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our values influence how we approach projects, build
            relationships and deliver services.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="grid-card"
            >
              <span className="text-sm font-bold text-brand-gold">
                {value.number}
              </span>

              <h3 className="mt-8 text-2xl font-bold text-brand-navy">
                {value.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 text-white lg:py-28">
        <div className="section-frame">
          <div className="dark-panel px-8 py-10 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                Our Approach
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                From consultation to successful project delivery
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Our structured approach ensures that requirements are understood,
                responsibilities are coordinated and progress is properly
                managed.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {projectStages.map((stage) => (
                <article
                  key={stage.number}
                  className="border-t border-white/20 pt-6"
                >
                  <span className="text-sm font-bold text-brand-gold">
                    {stage.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">{stage.title}</h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {stage.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <ImagePlaceholder
              label="Construction professionals observing safety procedures"
              className="min-h-[480px]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Safety and Quality
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
              Responsible practices at every project stage
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We recognise that successful construction requires more than
              completing physical work. It requires careful planning,
              responsible supervision, quality control and safe working
              practices.
            </p>

            <ul className="mt-8 space-y-5">
              {[
                "Careful project planning and coordination",
                "Responsible health and safety practices",
                "Quality-focused material and workmanship standards",
                "Clear communication and project documentation",
                "Regular monitoring throughout project execution",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold font-bold text-brand-charcoal"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <span className="leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-frame">
          <div className="glass-card px-8 py-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Work With Us
            </p>

            <h2 className="mt-4 text-3xl font-bold text-brand-navy sm:text-4xl lg:text-5xl">
              Let us help bring your construction project to life
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Contact our team to discuss your project requirements and discover
              how Belade Construction can support your objectives.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="button-primary">
                Contact Our Team
              </Link>

              <Link to="/projects" className="button-outline">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
