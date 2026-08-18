import { Link } from "react-router";
import logo from "../assets/images/Belade-logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Building Construction",
  "Civil Engineering",
  "Project Management",
  "Renovation and Remodelling",
  "Property Development",
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-navy-deep text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-brand-gold/15 blur-3xl" />
      <div className="section-frame relative py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-4 rounded-[1.75rem] bg-white/6 p-4 backdrop-blur-sm">
              <div className="rounded-2xl bg-white p-2">
                <img
                  src={logo}
                  alt="Belade Construction"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">
                  Belade
                </p>
                <p className="mt-1 text-sm text-slate-200">
                  Built with precision and care
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              Belade Construction brings together planning, engineering, and
              execution to create developments that feel durable, refined, and
              commercially sound.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Navigate</h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Our Services</h2>
            <ul className="mt-5 space-y-3">
              {services.map((item) => (
                <li key={item} className="text-sm text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Reach Us</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <p>Office adderess</p>
              <a href="tel:+2340000000000" className="block hover:text-white">
                +234 000 000 0000
              </a>
              <a
                href="mailto:info@beladeconstruction.com"
                className="block break-all hover:text-white"
              >
                info@beladeconstruction.com
              </a>
              <p>Monday to Friday, 8:00 AM to 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {currentYear} Belade Construction. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
