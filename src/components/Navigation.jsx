import { NavLink } from "react-router";
import { useState } from "react";
import logo from "../assets/images/Belade-logo.png";

const navigationLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const linkClassName = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
      isActive
        ? "bg-brand-navy text-white shadow-lg"
        : "text-slate-700 hover:bg-white hover:text-brand-navy"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-brand-cream/85 backdrop-blur-xl">
      <nav
        className="section-frame flex items-center justify-between py-4"
        aria-label="Global navigation"
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex items-center"
          aria-label="Belade Construction homepage"
        >
          <div className="rounded-2xl bg-white p-2 shadow-sm">
            <img
              src={logo}
              alt="Belade Construction"
              className="h-12 w-auto object-contain md:h-14"
            />
          </div>
        </NavLink>

        <div className="hidden items-center gap-2 rounded-full border border-brand-navy/10 bg-white/70 p-1.5 shadow-sm lg:flex">
          {navigationLinks.map((link) => (
            <NavLink key={link.name} to={link.to} className={linkClassName}>
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <NavLink to="/contact" className="button-primary">
            Request a Quote
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-navy/10 bg-white text-brand-navy shadow-sm lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="text-xl">{isMenuOpen ? "x" : "="}</span>
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="section-frame pb-5 lg:hidden"
        >
          <div className="glass-card flex flex-col gap-2 p-4">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={closeMenu}
                className={linkClassName}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="button-primary mt-2"
            >
              Request a Quote
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navigation;
