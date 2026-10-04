import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import Button from "../components/Button";
import { handleSectionNavClick } from "../utils/scrollToSection";

const links = [
  { name: "Home", to: "#home" },
  { name: "Courses", to: "#courses" },
  { name: "About Us", to: "#about" },
  { name: "Pricing", to: "#pricing" },
  { name: "Blog", to: "#blog" },
];

function Nav() {
  // menuOpen = true marka mobile menu-ka furan yahay
  const [menuOpen, setMenuOpen] = useState(false);

  // link la taabto → xir menu, kadib scroll
  const goTo = (e, to) => {
    setMenuOpen(false);
    handleSectionNavClick(e, to);
  };

  return (
    <header className="absolute top-0 left-0 z-50 w-full padding-x py-4">
      <nav className="mx-auto flex h-14 w-full max-w-[1320px] items-center justify-between rounded-full bg-white px-5">

        {/* Logo */}
        <a href="#home" onClick={(e) => goTo(e, "#home")} className="flex items-center gap-2">
          <GraduationCap className="text-secondary" size={24} strokeWidth={2.5} />
          <span className="font-roboto text-xl font-bold text-secondary">EduLearn</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm font-medium sm:flex">
          {links.map((link) => (
            <li key={link.to}>
              <a href={link.to} onClick={(e) => goTo(e, link.to)} className="hover:text-secondary">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop button */}
        <div className="hidden sm:block">
          <Button variant="primary" size="sm" href="#get-started" onClick={(e) => goTo(e, "#get-started")}>
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button type="button" className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu — wuxuu muuqdaa marka menuOpen = true */}
      {menuOpen && (
        <div className="mt-2 rounded-2xl bg-white p-4 shadow-lg sm:hidden">
          {links.map((link) => (
            <a
              key={link.to}
              href={link.to}
              onClick={(e) => goTo(e, link.to)}
              className="block rounded-xl px-3 py-3 text-sm font-medium hover:bg-primary/5 hover:text-secondary"
            >
              {link.name}
            </a>
          ))}

          <Button
            variant="primary"
            size="sm"
            href="#get-started"
            className="mt-2 w-full"
            onClick={(e) => goTo(e, "#get-started")}
          >
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
}

export default Nav;
