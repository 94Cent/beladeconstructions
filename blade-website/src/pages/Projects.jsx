import { useState } from "react";
import { Link } from "react-router";
import ImagePlaceholder from "../components/ImagePlaceholder";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Renovation",
];

const projects = [
  {
    id: 1,
    title: "Luxury Residential Development",
    category: "Residential",
    location: "Lagos, Nigeria",
    year: "2026",
    status: "Completed",
    description:
      "Construction of a contemporary residential development designed around functionality, comfort and long-term value.",
  },
  {
    id: 2,
    title: "Commercial Office Development",
    category: "Commercial",
    location: "Lagos, Nigeria",
    year: "2026",
    status: "Completed",
    description:
      "Delivery of a modern commercial facility with carefully coordinated structural and building-services requirements.",
  },
  {
    id: 3,
    title: "Industrial Facility",
    category: "Industrial",
    location: "Ogun State, Nigeria",
    year: "2026",
    status: "Ongoing",
    description:
      "Development of an industrial facility designed to support efficient operations, safety and future expansion.",
  },
  {
    id: 4,
    title: "Residential Building Renovation",
    category: "Renovation",
    location: "Lagos, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Comprehensive renovation of an existing residential property to improve its function, appearance and overall value.",
  },
  {
    id: 5,
    title: "Multi-Unit Residential Project",
    category: "Residential",
    location: "Abuja, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Construction of a multi-unit residential development with coordinated internal and external infrastructure.",
  },
  {
    id: 6,
    title: "Commercial Building Upgrade",
    category: "Renovation",
    location: "Lagos, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Remodelling and improvement of an existing commercial property to support modern business requirements.",
  },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="section-frame relative flex min-h-[55vh] items-center py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-gold">
              Our Projects
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Projects built with purpose and professional excellence
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Explore selected residential, commercial, industrial and
              renovation projects delivered or managed by Belade Construction.
            </p>

            <Link to="/contact" className="mt-9 inline-flex button-primary">
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <section className="section-frame py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Selected Portfolio
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
              Transforming plans into valuable developments
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              Every project reflects our commitment to careful planning,
              technical coordination, responsible execution and clear client
              communication.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist/60 py-20 lg:py-28">
        <div className="section-frame">
          <div
            className="flex flex-wrap gap-3"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  activeCategory === category
                    ? "bg-brand-navy text-white"
                    : "border border-brand-navy/15 bg-white text-slate-700 hover:border-brand-navy hover:text-brand-navy"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-600" aria-live="polite">
            Showing {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]"
              >
                <div className="relative overflow-hidden">
                  <ImagePlaceholder
                    label={project.title}
                    className="h-80 rounded-none border-0"
                  />

                  <span
                    className={`absolute right-4 top-4 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider ${
                      project.status === "Completed"
                        ? "bg-brand-navy text-white"
                        : "bg-brand-gold text-brand-charcoal"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="font-bold uppercase tracking-wider text-brand-gold">
                      {project.category}
                    </span>

                    <span className="text-slate-300" aria-hidden="true">
                      |
                    </span>

                    <span className="text-slate-500">{project.year}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-brand-navy">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {project.location}
                  </p>

                  <p className="mt-5 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center font-semibold text-brand-navy"
                  >
                    Enquire About This Project
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="mt-10 rounded-[2rem] bg-white px-6 py-16 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <h3 className="text-2xl font-bold text-brand-navy">
                No projects found
              </h3>

              <p className="mt-3 text-slate-600">
                There are currently no projects available in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 text-white lg:py-28">
        <div className="section-frame">
          <div className="dark-panel px-8 py-10 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                Our Project Standards
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Professional coordination throughout every project
              </h2>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Clear Planning",
                  description:
                    "Establishing the project scope, requirements, responsibilities and delivery expectations.",
                },
                {
                  number: "02",
                  title: "Quality Control",
                  description:
                    "Monitoring materials and workmanship throughout project execution.",
                },
                {
                  number: "03",
                  title: "Safety Awareness",
                  description:
                    "Promoting responsible working practices across construction activities.",
                },
                {
                  number: "04",
                  title: "Client Communication",
                  description:
                    "Keeping clients informed about progress, decisions and important project developments.",
                },
              ].map((standard) => (
                <article
                  key={standard.number}
                  className="border-t border-white/20 pt-6"
                >
                  <span className="text-sm font-bold text-brand-gold">
                    {standard.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">{standard.title}</h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {standard.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Your Project Could Be Next
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
              Planning a residential, commercial or industrial development?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Tell us about your proposed project, its location, expected scope
              and preferred delivery timeline. Our team will review your
              requirements and contact you.
            </p>
          </div>

          <div className="soft-panel p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-brand-navy">
              Discuss your project
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Contact Belade Construction to begin a professional conversation
              about your development.
            </p>

            <Link to="/contact" className="mt-7 inline-flex w-full button-outline">
              Submit a Project Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
