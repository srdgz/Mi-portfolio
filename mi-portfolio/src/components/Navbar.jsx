import { useState } from "react";

import DownloadCvButton from "./DownloadCvButton.jsx";
import { MenuIcon, CloseIcon } from "./Icons.jsx";

const links = [
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative mx-auto flex max-w-300 items-center justify-between gap-4 px-5 py-6 sm:px-8 lg:px-12">
      <a
        href="/#inicio"
        onClick={closeMenu}
        className="py-3 font-mono text-[15px] font-medium hover:text-accent"
      >
        sandra<span className="text-accent">.</span>rodríguez
      </a>
      <nav aria-label="Principal" className="flex gap-2 max-lg:hidden">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="px-3.5 py-3 text-[15px] hover:text-accent"
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <div className="max-sm:hidden">
          <DownloadCvButton />
        </div>
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex size-12 items-center justify-center hover:text-accent lg:hidden"
          aria-label={isMenuOpen ? "Cerrar menú" : "Desplegar menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav
          aria-label="Principal móvil"
          className="absolute right-5 top-full z-50 flex w-56 flex-col rounded-2xl border border-line bg-card py-2 sm:right-8 lg:hidden"
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="px-5 py-3 text-[15px] hover:text-accent"
            >
              {label}
            </a>
          ))}
          <div className="mt-2 border-t border-line px-3 pb-1 pt-3 sm:hidden">
            <DownloadCvButton />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
