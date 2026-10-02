import { getProjects } from "@/container";
import ProjectShowcase from "@/presentation/components/organisms/ProjectShowcase";
import Heading from "@/presentation/components/molecules/Heading";
import useLanguage from "@/presentation/hooks/useLanguage";
import useReveal from "@/presentation/hooks/useReveal";

const Projects = () => {
  const ref = useReveal<HTMLDivElement>();
  const { locale, t } = useLanguage();
  const projects = getProjects(locale);

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
      {projects.map((project, index) => (
        <ProjectShowcase key={project.title} index={index + 1} {...project} />
      ))}
    </section>
  );
};

export default Projects;
