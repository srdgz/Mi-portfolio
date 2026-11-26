import { useEffect, useRef, useState } from "react";

import { getProjects } from "@/container";
import { ChevronDownIcon } from "@/presentation/components/atoms/Icons";
import ProjectShowcase from "@/presentation/components/organisms/ProjectShowcase";
import Heading from "@/presentation/components/molecules/Heading";
import useLanguage from "@/presentation/hooks/useLanguage";
import useReveal from "@/presentation/hooks/useReveal";

const VISIBLE_PROJECTS = 3;

const Projects = () => {
  const ref = useReveal<HTMLDivElement>();
  const { locale, t } = useLanguage();
  const projects = getProjects(locale);
  const [expanded, setExpanded] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const toggled = useRef(false);

  const visible = projects.slice(0, VISIBLE_PROJECTS);
  const hidden = projects.slice(VISIBLE_PROJECTS);

  useEffect(() => {
    if (!toggled.current) return;
    toggled.current = false;

    if (expanded) {
      const heading = moreRef.current?.querySelector("h3");
      heading?.setAttribute("tabindex", "-1");
      heading?.focus();
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    toggleRef.current?.scrollIntoView({
      block: "center",
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [expanded]);

  const toggle = () => {
    toggled.current = true;
    setExpanded((current) => !current);
  };

  return (
    <section
      id="proyectos"
      className="mx-auto flex max-w-300 flex-col gap-[clamp(56px,8vw,112px)] px-5 pb-[clamp(64px,9vw,128px)] sm:px-8 lg:px-12"
    >
      <div ref={ref} className="reveal">
        <Heading number="03" label={t.projects.label}>
          {t.projects.title}
        </Heading>
      </div>
      {visible.map((project, index) => (
        <ProjectShowcase key={project.title} index={index + 1} {...project} />
      ))}
      {hidden.length > 0 && (
        <>
          <div
            ref={moreRef}
            id="more-projects"
            className={
              expanded ? "flex flex-col gap-[clamp(56px,8vw,112px)]" : "hidden"
            }
          >
            {expanded &&
              hidden.map((project, index) => (
                <ProjectShowcase
                  key={project.title}
                  index={VISIBLE_PROJECTS + index + 1}
                  {...project}
                />
              ))}
          </div>
          <div className="flex justify-center">
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={expanded}
              aria-controls="more-projects"
              onClick={toggle}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-[15px] font-semibold hover:border-accent hover:text-accent"
            >
              {expanded ? t.projects.showLess : t.projects.showMore}
              <span
                className={`transition-transform ${expanded ? "rotate-180" : ""}`}
              >
                <ChevronDownIcon size={16} />
              </span>
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
