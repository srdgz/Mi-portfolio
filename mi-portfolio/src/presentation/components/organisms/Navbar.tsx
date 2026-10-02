import { useState } from "react";

import { MenuIcon, CloseIcon } from "@/presentation/components/atoms/Icons";
import DownloadCvButton from "@/presentation/components/molecules/DownloadCvButton";
import LanguageSwitch from "@/presentation/components/molecules/LanguageSwitch";
import ThemeSwitch from "@/presentation/components/molecules/ThemeSwitch";
import useActiveSection from "@/presentation/hooks/useActiveSection";
import useLanguage from "@/presentation/hooks/useLanguage";

const sectionIds = ["sobre-mi", "experiencia", "proyectos", "contacto"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const { t } = useLanguage();

  const links = [
    { id: sectionIds[0], label: t.nav.about },
    { id: sectionIds[1], label: t.nav.experience },
    { id: sectionIds[2], label: t.nav.projects },
    { id: sectionIds[3], label: t.nav.contact },
  ];

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
        <nav aria-label={t.nav.main} className="flex gap-1 max-lg:hidden">
          {links.map(({ id, label }, index) => (
            <a
              key={id}
              href={`/#${id}`}
              aria-current={activeId === id ? "true" : undefined}
              className={`flex items-baseline gap-1.5 px-3 py-3 text-[15px] transition-colors hover:text-accent ${activeId === id ? "text-accent" : ""}`}
            >
              <span className="font-mono text-[11px] text-muted max-xl:hidden">
                0{index + 1}
              </span>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="max-sm:hidden">
            <LanguageSwitch />
          </div>
          <div className="max-[349px]:hidden sm:hidden">
            <LanguageSwitch compact />
          </div>
          <div className="max-[349px]:hidden">
            <ThemeSwitch />
          </div>
          <div className="max-sm:hidden">
            <DownloadCvButton />
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex size-12 items-center justify-center hover:text-accent lg:hidden"
            aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav
            aria-label={t.nav.mobile}
            className="absolute top-full right-5 z-50 mt-2 flex w-56 flex-col rounded-2xl border border-line bg-card py-2 sm:right-8 lg:hidden"
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
            <div className="mt-2 flex flex-col items-start gap-3 border-t border-line px-3 pt-3 pb-1 sm:hidden">
              <div className="flex items-center gap-2 min-[350px]:hidden">
                <LanguageSwitch />
                <ThemeSwitch />
              </div>
              <DownloadCvButton />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
