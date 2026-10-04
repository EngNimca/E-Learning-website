import { handleSectionNavClick } from "../utils/scrollToSection";

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-roboto text-lg font-semibold text-white">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={(event) => handleSectionNavClick(event, link.href)}
              className="text-sm text-white/60 transition hover:text-secondary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
