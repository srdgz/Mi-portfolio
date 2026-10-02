import { useState } from "react";

import DownloadCvButton from "./DownloadCvButton.jsx";
import { MenuIcon, CloseIcon } from "./Icons.jsx";
import useActiveSection from "../hooks/useActiveSection";

const links = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

const sectionIds = links.map(({ id }) => id);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-base/75 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-300 items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12">
        <a
          href="/#inicio"
          onClick={closeMenu}
          className="py-3 font-mono text-[15px] font-medium hover:text-accent"
        >
          sandra<span className="text-accent">.</span>rodríguez
          <span
            className="ml-0.5 animate-blink text-warm motion-reduce:animate-none"
            aria-hidden="true"
          >
            _
          </span>
        </a>
        <nav aria-label="Principal" className="flex gap-1 max-lg:hidden">
          {links.map(({ id, label }, index) => (
            <a
              key={id}
              href={`/#${id}`}
              aria-current={activeId === id ? "true" : undefined}
              className={`flex items-baseline gap-1.5 px-3.5 py-3 text-[15px] transition-colors hover:text-accent ${activeId === id ? "text-accent" : ""}`}
            >
              <span className="font-mono text-[11px] text-muted">
                0{index + 1}
              </span>
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
            className="absolute right-5 top-full z-50 mt-2 flex w-56 flex-col rounded-2xl border border-line bg-card py-2 sm:right-8 lg:hidden"
          >
            {links.map(({ id, label }, index) => (
              <a
                key={id}
                href={`/#${id}`}
                onClick={closeMenu}
                className="flex items-baseline gap-2 px-5 py-3 text-[15px] hover:text-accent"
              >
                <span className="font-mono text-[11px] text-muted">
                  0{index + 1}
                </span>
                {label}
              </a>
            ))}
            <div className="mt-2 border-t border-line px-3 pb-1 pt-3 sm:hidden">
              <DownloadCvButton />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
