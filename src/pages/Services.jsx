import { Link } from "react-router";
import ImagePlaceholder from "../components/ImagePlaceholder";

const services = [
  {
    number: "01",
    title: "Building Construction",
    description:
      "We provide professional construction services for residential, commercial and industrial developments.",
    features: [
      "Residential buildings",
      "Commercial developments",
      "Industrial facilities",
      "Structural construction",
      "Site coordination",
    ],
  },
  {
    number: "02",
    title: "Civil Engineering",
    description:
      "We deliver practical civil-engineering solutions that respond to each project's structural and technical requirements.",
    features: [
      "Site preparation",
      "Structural works",
      "Drainage systems",
      "Road and external works",
      "Infrastructure development",
    ],
  },
  {
    number: "03",
    title: "Project Management",
    description:
      "We coordinate project activities, resources and stakeholders from initial planning through final delivery.",
    features: [
      "Project planning",
      "Budget coordination",
      "Schedule management",
      "Contractor supervision",
      "Progress reporting",
    ],
  },
  {
    number: "04",
    title: "Design and Build",
    description:
      "Our integrated approach brings design and construction responsibilities together for improved project coordination.",
    features: [
      "Concept development",
      "Design coordination",
      "Technical planning",
      "Construction execution",
      "Project handover",
    ],
  },
  {
    number: "05",
    title: "Renovation and Remodelling",
    description:
      "We improve existing buildings by creating safer, more functional and visually appealing environments.",
    features: [
      "Residential renovation",
      "Office refurbishment",
      "Structural improvements",
      "Interior remodelling",
      "Building upgrades",
    ],
  },
  {
    number: "06",
    title: "Property Development",
    description:
      "We support the planning and development of viable residential and commercial property projects.",
    features: [
      "Development planning",
      "Project feasibility support",
      "Residential developments",
      "Commercial developments",
      "Construction coordination",
    ],
  },
  {
    number: "07",
    title: "General Contracting",
    description:
      "We coordinate labour, materials, subcontractors and construction activities to support successful delivery.",
    features: [
      "Contract administration",
      "Subcontractor coordination",
      "Material procurement",
      "Site supervision",
      "Quality monitoring",
    ],
  },
  {
    number: "08",
    title: "Facility Maintenance",
    description:
      "We provide maintenance and improvement services that help preserve building performance and long-term value.",
    features: [
      "Preventive maintenance",
      "Building repairs",
      "Property inspections",
      "Corrective works",
      "Facility upgrades",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We discuss the project objectives, proposed scope, location, budget and expected completion period.",
  },
  {
    number: "02",
    title: "Assessment and Planning",
    description:
      "Our team evaluates the requirements and develops an appropriate strategy for project execution.",
  },
  {
    number: "03",
    title: "Proposal and Agreement",
    description:
      "We present the recommended scope, cost considerations, responsibilities and project schedule.",
  },
  {
    number: "04",
    title: "Project Execution",
    description:
      "Construction activities are coordinated with continuous attention to safety, quality and progress.",
  },
  {
    number: "05",
    title: "Inspection and Handover",
    description:
      "Completed work is reviewed against agreed requirements before formal project handover.",
  },
];

function Services() {
  return (
    <div>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="section-frame relative flex min-h-[55vh] items-center py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-gold">
              Our Services
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Comprehensive construction and engineering solutions
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              From planning and construction to renovation and project
              management, Belade Construction provides professional solutions
              tailored to each client's requirements.
            </p>

            <Link to="/contact" className="mt-9 inline-flex button-primary">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      <section className="section-frame py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              What We Do
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
              Supporting projects from concept to completion
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              We provide services across key stages of the construction
              process. Our team works with clients, consultants, subcontractors
              and suppliers to coordinate project requirements and achieve
              dependable outcomes.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Every engagement begins with a clear understanding of the
              project's objectives, scope, budget and expected delivery
              standards.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist/60 py-20 lg:py-28">
        <div className="section-frame">
          <div className="grid gap-7 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="grid-card"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="text-sm font-bold text-brand-gold">
                      {service.number}
                    </span>

                    <h2 className="mt-4 text-2xl font-bold text-brand-navy sm:text-3xl">
                      {service.title}
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-mist font-bold text-brand-navy">
                    +
                  </div>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <span
                        className="mt-0.5 font-bold text-brand-gold"
                        aria-hidden="true"
                      >
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <ImagePlaceholder
              label="Construction professionals working on a building project"
              className="min-h-[520px]"
            />

            <div className="absolute -bottom-8 right-0 max-w-sm rounded-[1.5rem] bg-brand-navy p-7 text-white shadow-xl sm:right-8">
              <p className="text-xl font-bold">
                Professional coordination at every stage of the project
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Our Service Commitment
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
              Solutions built around each client's requirements
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We understand that every construction project has unique
              requirements. Our services are therefore planned around the
              client's objectives, the project environment and the applicable
              technical considerations.
            </p>

            <ul className="mt-8 space-y-5">
              {[
                "Clear project scope and responsibilities",
                "Professional planning and coordination",
                "Responsible site-management practices",
                "Quality-focused project execution",
                "Transparent client communication",
                "Careful monitoring and reporting",
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

      <section className="py-20 text-white lg:py-28">
        <div className="section-frame">
          <div className="dark-panel px-8 py-10 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                How We Work
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                A structured approach to project delivery
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Our process promotes clarity, coordination and accountability
                throughout the project lifecycle.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {process.map((stage) => (
                <article
                  key={stage.number}
                  className="border-t border-white/20 pt-6"
                >
                  <span className="text-sm font-bold text-brand-gold">
                    {stage.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">{stage.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {stage.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame py-20 lg:py-28">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
            Sectors We Serve
          </p>

          <h2 className="mt-4 text-3xl font-bold text-brand-navy sm:text-4xl lg:text-5xl">
            Supporting different types of development
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Residential",
            "Commercial",
            "Industrial",
            "Institutional",
          ].map((sector) => (
            <article
              key={sector}
              className="soft-panel p-9 text-center"
            >
              <div className="mx-auto h-1 w-12 bg-brand-gold" />

              <h3 className="mt-7 text-xl font-bold text-brand-navy">
                {sector}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Professional construction solutions tailored to {sector.toLowerCase()}{" "}
                project requirements.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="section-frame">
          <div className="glass-card px-8 py-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Request a Consultation
            </p>

            <h2 className="mt-4 text-3xl font-bold text-brand-navy sm:text-4xl lg:text-5xl">
              Which service does your project require?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Share your project requirements with our team, and we will discuss
              an appropriate construction or project-management solution.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="button-primary">
                Discuss Your Project
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

export default Services;
