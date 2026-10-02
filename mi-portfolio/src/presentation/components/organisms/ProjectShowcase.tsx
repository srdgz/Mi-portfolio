import type { Project } from "@/domain/entities/project";
import Tag from "@/presentation/components/atoms/Tag";
import {
  BrowserFrame,
  PhoneFrame,
} from "@/presentation/components/molecules/DeviceFrames";
import ProjectLink from "@/presentation/components/molecules/ProjectLink";
import useTilt from "@/presentation/hooks/useTilt";
import useReveal from "@/presentation/hooks/useReveal";

interface ProjectShowcaseProps extends Project {
  index: number;
}

const ProjectShowcase = ({
  index,
  title,
  label,
  description,
  desktopImage,
  mobileImage,
  url,
  tech,
  repoLink,
  demoLink,
}: ProjectShowcaseProps) => {
  const revealRef = useReveal();
  const tiltRef = useTilt(5);
  const isReversed = index % 2 === 0;

  return (
    <article
      ref={revealRef}
      className="reveal grid items-center gap-x-14 gap-y-8 lg:grid-cols-12"
    >
      <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : ""}`}>
        <div
          ref={tiltRef}
          className="relative pr-[7%] pb-[7%] transition-transform duration-200 ease-out"
        >
          <BrowserFrame
            image={desktopImage}
            url={url}
            alt={`Captura de ${title} en escritorio`}
          />
          <div className="absolute right-0 bottom-0 w-[23%]">
            <PhoneFrame
              image={mobileImage}
              alt={`Captura de ${title} en móvil`}
            />
          </div>
        </div>
      </div>
      <div className="flex min-w-0 flex-col gap-4 lg:col-span-5">
        <p className="flex items-center gap-3 font-mono text-sm">
          <span className="text-accent">{String(index).padStart(2, "0")}</span>
          <span className="h-px w-10 bg-line"></span>
          <span className="text-warm">{label}</span>
        </p>
        <h3 className="font-display text-[clamp(28px,3.6vw,46px)] leading-none font-bold tracking-tight">
          {title}
        </h3>
        <p className="text-lg">{description}</p>
        <ul className="flex flex-wrap gap-2 font-mono text-[13px] text-muted">
          {tech.map((name) => (
            <Tag key={name}>{name}</Tag>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 pt-2">
          {demoLink && (
            <ProjectLink href={demoLink} primary>
              Ver demo
            </ProjectLink>
          )}
          <ProjectLink href={repoLink}>Repositorio</ProjectLink>
        </div>
      </div>
    </article>
  );
};

export default ProjectShowcase;
