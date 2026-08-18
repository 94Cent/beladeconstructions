import { Link } from "react-router";
import ImagePlaceholder from "../components/ImagePlaceholder";

const services = [
  {
    number: "01",
    title: "Building Construction",
    description:
      "Professional construction services for residential, commercial and industrial developments.",
  },
  {
    number: "02",
    title: "Civil Engineering",
    description:
      "Reliable engineering solutions designed to meet technical, structural and regulatory requirements.",
  },
  {
    number: "03",
    title: "Project Management",
    description:
      "Comprehensive planning, coordination and supervision from project commencement to completion.",
  },
  {
    number: "04",
    title: "Renovation and Remodelling",
    description:
      "Transforming existing buildings into functional, modern and visually appealing spaces.",
  },
  {
    number: "05",
    title: "Property Development",
    description:
      "Developing viable residential and commercial properties that deliver lasting value.",
  },
  {
    number: "06",
    title: "General Contracting",
    description:
      "Coordinating labour, materials, procurement and execution to ensure successful project delivery.",
  },
];

const strengths = [
  {
    title: "Quality Construction",
    description:
      "We apply professional standards, dependable materials and careful workmanship throughout every project.",
  },
  {
    title: "Safety Focused",
    description:
      "Health and safety considerations are incorporated into our planning, execution and site-management processes.",
  },
  {
    title: "Timely Delivery",
    description:
      "Projects are carefully coordinated to maintain agreed schedules without compromising quality.",
  },
  {
    title: "Transparent Communication",
    description:
      "We maintain clear communication with clients throughout each phase of the construction process.",
  },
];

const projects = [
  {
    title: "Residential Development",
    category: "Residential Construction",
    location: "Nigeria",
  },
  {
    title: "Commercial Development",
    category: "Commercial Construction",
    location: "Nigeria",
  },
  {
    title: "Building Renovation",
    category: "Renovation and Remodelling",
    location: "Nigeria",
  },
];

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(200,155,60,0.35),transparent_60%)]" />
        <div className="section-frame relative flex min-h-[85vh] items-center py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-brand-gold">
              Construction · Engineering · Project Management
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Building today.
              <span className="block text-brand-gold">
                Creating lasting value.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
              Belade Construction delivers reliable building, engineering and
              project-management solutions founded on quality, safety and
              professional excellence.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/projects" className="button-primary">
                View Our Projects
              </Link>

              <Link to="/contact" className="button-secondary">
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="section-frame relative hidden lg:block">
          <div className="glass-card grid grid-cols-3">
            <div className="border-r border-brand-navy/10 px-8 py-6">
              <p className="font-bold text-brand-navy">Quality Driven</p>
              <p className="mt-1 text-sm text-slate-600">
                Professional standards at every stage
              </p>
            </div>

            <div className="border-r border-brand-navy/10 px-8 py-6">
              <p className="font-bold text-brand-navy">Safety Focused</p>
              <p className="mt-1 text-sm text-slate-600">
                Responsible site-management practices
              </p>
            </div>

            <div className="px-8 py-6">
              <p className="font-bold text-brand-navy">Client Centred</p>
              <p className="mt-1 text-sm text-slate-600">
                Clear communication and dependable service
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <ImagePlaceholder
              label="Belade Construction project"
              className="min-h-[480px]"
            />

            <div className="absolute -bottom-8 right-0 max-w-xs rounded-[1.5rem] bg-brand-navy p-7 text-white shadow-xl sm:right-8">
              <p className="text-xl font-bold">
                Professional solutions from planning to completion
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              About Belade Construction
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
              A dependable partner for your construction projects
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Belade Construction provides construction, engineering and
              project-management services designed to transform ideas into
              functional, durable and valuable developments.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We work closely with clients, consultants, contractors and other
              stakeholders to ensure that every stage of a project is
              professionally coordinated and effectively delivered.
            </p>

            <div className="mt-8 rounded-[1.5rem] border-l-4 border-brand-gold bg-brand-sand p-6">
              <p className="font-semibold leading-7 text-brand-charcoal">
                Our objective is to deliver quality construction solutions that
                meet our clients&apos; requirements and create lasting value.
              </p>
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center font-semibold text-brand-navy hover:text-brand-navy-deep"
            >
              Learn more about us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist/60 py-20 lg:py-28">
        <div className="section-frame">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                What We Do
              </p>

              <h2 className="mt-4 text-3xl font-bold text-brand-navy sm:text-4xl lg:text-5xl">
                Comprehensive construction services
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center font-semibold text-brand-navy"
            >
              Explore all services
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="grid-card"
              >
                <span className="text-sm font-bold text-brand-gold">
                  {service.number}
                </span>

                <h3 className="mt-8 text-xl font-bold text-brand-navy">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="mt-7 inline-flex items-center text-sm font-semibold text-brand-navy"
                >
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-white lg:py-28">
        <div className="section-frame">
          <div className="dark-panel grid gap-14 px-8 py-10 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                Why Choose Us
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Building with purpose, professionalism and responsibility
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-300">
                Our approach combines careful planning, technical coordination
                and client-focused service to achieve successful project
                outcomes.
              </p>

              <Link to="/contact" className="mt-9 inline-flex button-primary">
                Discuss Your Project
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {strengths.map((strength, index) => (
                <article key={strength.title} className="border-t border-white/20 pt-6">
                  <span className="text-sm font-bold text-brand-gold">
                    0{index + 1}
                  </span>

                  <h3 className="mt-4 text-xl font-bold">{strength.title}</h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {strength.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame py-20 lg:py-28">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Our Portfolio
            </p>

            <h2 className="mt-4 text-3xl font-bold text-brand-navy sm:text-4xl lg:text-5xl">
              Featured projects
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center font-semibold text-brand-navy"
          >
            View all projects
          </Link>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <ImagePlaceholder
                label={project.title}
                className="h-80 rounded-none border-0"
              />

              <div className="p-7">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-brand-navy">
                  {project.title}
                </h3>

                <p className="mt-2 text-slate-600">{project.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="section-frame">
          <div className="glass-card px-8 py-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Start a Project
            </p>

            <h2 className="mt-4 text-3xl font-bold text-brand-navy sm:text-4xl lg:text-5xl">
              Have a construction project in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Contact our team to discuss your project requirements and learn how
              Belade Construction can help bring your vision to life.
            </p>

            <Link to="/contact" className="mt-9 inline-flex button-outline">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
