import { BrowserFrame, PhoneFrame } from "./DeviceFrames.jsx";
import { ArrowUpRightIcon } from "./Icons.jsx";
import useTilt from "../hooks/useTilt";
import useReveal from "../hooks/useReveal";

const ProjectLink = ({ href, primary = false, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/link inline-flex items-center gap-2 rounded-full px-5 py-3 text-[15px] font-semibold ${primary ? "bg-accent text-on-accent hover:brightness-110" : "border border-line hover:border-accent hover:text-accent"}`}
    >
      {children}
      <span className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
        <ArrowUpRightIcon size={16} />
      </span>
    </a>
  );
};

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
}) => {
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
          className="relative pb-[7%] pr-[7%] transition-transform duration-200 ease-out"
        >
          <BrowserFrame
            image={desktopImage}
            url={url}
            alt={`Captura de ${title} en escritorio`}
          />
          <div className="absolute bottom-0 right-0 w-[23%]">
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
        <h3 className="font-display text-[clamp(28px,3.6vw,46px)] font-bold leading-none tracking-tight">
          {title}
        </h3>
        <p className="text-lg">{description}</p>
        <ul className="flex flex-wrap gap-2 font-mono text-[13px] text-muted">
          {tech.map((name) => (
            <li key={name} className="rounded-md border border-line px-2.5 py-1">
              {name}
            </li>
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
