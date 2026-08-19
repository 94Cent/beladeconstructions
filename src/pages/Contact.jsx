import { useState } from "react";

const initialFormData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  service: "",
  location: "",
  budget: "",
  startDate: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormStatus(
      "Your project information has been entered successfully. Form delivery must be connected before the website is published.",
    );
  };

  return (
    <div>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="section-frame relative flex min-h-[50vh] items-center py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-gold">
              Contact Us
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let us discuss your construction project
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Tell us about your proposed project, and our team will contact you
              to discuss your requirements and the appropriate next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="section-frame py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article className="grid-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-mist text-xl font-bold text-brand-navy">
              01
            </div>

            <h2 className="mt-6 text-xl font-bold text-brand-navy">
              Office Address
            </h2>

            <address className="mt-3 not-italic leading-7 text-slate-600">
              Office Address
            </address>
          </article>

          <article className="grid-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-mist text-xl font-bold text-brand-navy">
              02
            </div>

            <h2 className="mt-6 text-xl font-bold text-brand-navy">
              Telephone
            </h2>

            <a
              href="tel:+2340000000000"
              className="mt-3 block text-slate-600 hover:text-brand-navy"
            >
              +234 000 000 0000
            </a>

            <a
              href="tel:+2340000000000"
              className="mt-2 block text-slate-600 hover:text-brand-navy"
            >
              +234 000 000 0000
            </a>
          </article>

          <article className="grid-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-mist text-xl font-bold text-brand-navy">
              03
            </div>

            <h2 className="mt-6 text-xl font-bold text-brand-navy">
              Email Address
            </h2>

            <a
              href="mailto:info@beladeconstruction.com"
              className="mt-3 block break-all text-slate-600 hover:text-brand-navy"
            >
              info@beladeconstruction.com
            </a>

            <a
              href="mailto:projects@beladeconstruction.com"
              className="mt-2 block break-all text-slate-600 hover:text-brand-navy"
            >
              projects@beladeconstruction.com
            </a>
          </article>

          <article className="grid-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-mist text-xl font-bold text-brand-navy">
              04
            </div>

            <h2 className="mt-6 text-xl font-bold text-brand-navy">
              Working Hours
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Monday-Friday
              <br />
              8:00 AM-5:00 PM
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Weekends by appointment
            </p>
          </article>
        </div>
      </section>

      <section className="bg-brand-mist/60 py-20 lg:py-28">
        <div className="section-frame grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Project Enquiry
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl">
              Share your project requirements with us
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Complete the enquiry form with as much information as possible.
              This will help our team understand the nature and scope of your
              proposed project.
            </p>

            <div className="mt-9 rounded-[1.5rem] border-l-4 border-brand-gold bg-white p-6 shadow-sm">
              <h3 className="font-bold text-brand-navy">
                Information you may provide
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>• Project type and proposed location</li>
                <li>• Expected scope of work</li>
                <li>• Estimated budget range</li>
                <li>• Proposed commencement date</li>
                <li>• Relevant plans or supporting documents</li>
              </ul>
            </div>

            <div className="mt-8 rounded-[2rem] bg-brand-navy p-7 text-white shadow-xl">
              <h3 className="text-xl font-bold">Need immediate assistance?</h3>

              <p className="mt-3 leading-7 text-slate-300">
                Call our office during working hours to speak directly with a
                member of the Belade Construction team.
              </p>

              <a
                href="tel:+2340000000000"
                className="mt-5 inline-flex font-semibold text-brand-gold"
              >
                +234 000 000 0000
              </a>
            </div>
          </div>

          <div className="glass-card p-7 shadow-sm sm:p-10">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-brand-charcoal"
                  >
                    Full name <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className="mt-2 w-full rounded-2xl border border-brand-navy/10 bg-white px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-semibold text-brand-charcoal"
                  >
                    Company name
                  </label>

                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    autoComplete="organization"
                    placeholder="Enter your company name"
                    className="mt-2 w-full rounded-2xl border border-brand-navy/10 bg-white px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-brand-charcoal"
                  >
                    Email address <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-brand-navy/10 bg-white px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-brand-charcoal"
                  >
                    Telephone number <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    placeholder="+234"
                    className="mt-2 w-full rounded-2xl border border-brand-navy/10 bg-white px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-brand-charcoal"
                  >
                    Required service <span className="text-red-600">*</span>
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-brand-navy/10 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                  >
                    <option value="">Select a service</option>
                    <option value="Building Construction">
                      Building Construction
                    </option>
                    <option value="Civil Engineering">
                      Civil Engineering
                    </option>
                    <option value="Project Management">
                      Project Management
                    </option>
                    <option value="Design and Build">
                      Design and Build
                    </option>
                    <option value="Renovation and Remodelling">
                      Renovation and Remodelling
                    </option>
                    <option value="Property Development">
                      Property Development
                    </option>
                    <option value="General Contracting">
                      General Contracting
                    </option>
                    <option value="Facility Maintenance">
                      Facility Maintenance
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-semibold text-brand-charcoal"
                  >
                    Project location
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City and state"
                    className="mt-2 w-full rounded-2xl border border-brand-navy/10 bg-white px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                  />
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-semibold text-brand-charcoal"
                  >
                    Estimated budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-brand-navy/10 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                  >
                    <option value="">Select a budget range</option>
                    <option value="Below N10 million">
                      Below N10 million
                    </option>
                    <option value="N10 million-N50 million">
                      N10 million-N50 million
                    </option>
                    <option value="N50 million-N100 million">
                      N50 million-N100 million
                    </option>
                    <option value="N100 million-N500 million">
                      N100 million-N500 million
                    </option>
                    <option value="Above N500 million">
                      Above N500 million
                    </option>
                    <option value="To be discussed">To be discussed</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="startDate"
                    className="block text-sm font-semibold text-brand-charcoal"
                  >
                    Proposed commencement date
                  </label>

                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-brand-navy/10 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-brand-charcoal"
                  >
                    Project description <span className="text-red-600">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="7"
                    placeholder="Describe your proposed project, objectives and expected scope of work."
                    className="mt-2 w-full resize-y rounded-[1.5rem] border border-brand-navy/10 bg-white px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 accent-brand-navy"
                  />

                  <span className="text-sm leading-6 text-slate-600">
                    I consent to Belade Construction using the information
                    provided to respond to my enquiry.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand-navy px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-navy-deep focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 sm:w-auto"
              >
                Submit Project Enquiry
              </button>

              {formStatus && (
                <div
                  className="mt-6 rounded-[1.5rem] border-l-4 border-brand-gold bg-brand-sand p-4 text-sm leading-6 text-slate-700"
                  role="status"
                >
                  {formStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="section-frame pb-20">
        <div className="grid min-h-[420px] place-items-center rounded-[2rem] border border-brand-navy/10 bg-brand-mist/60 px-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="max-w-md">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Our Location
            </p>

            <h2 className="mt-4 text-3xl font-bold text-brand-navy">
              Google Maps
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Location
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
