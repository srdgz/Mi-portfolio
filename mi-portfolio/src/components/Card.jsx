import { ArrowUpRightIcon } from "./Icons.jsx";

const CardLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 py-3 text-[15px] font-semibold hover:text-accent"
    >
      {children}
      <ArrowUpRightIcon size={16} />
    </a>
  );
};

const Card = ({ title, label, description, image, tech, repoLink, demoLink }) => {
  return (
    <article className="flex flex-col gap-1 rounded-[28px] border border-line bg-card p-3 transition duration-300 hover:-translate-y-1 hover:border-accent/60 motion-reduce:transition-none">
      <div className="aspect-4/3 overflow-hidden rounded-[18px] bg-white">
        <img
          className="size-full object-contain"
          src={image}
          alt={`Captura de ${title}`}
          loading="lazy"
        />
      </div>
      <div className="flex grow flex-col gap-3 px-3 pb-3 pt-4">
        <p className="font-mono text-[13px] text-warm">{label}</p>
        <h3 className="font-display text-[26px] font-bold leading-[1.1] tracking-[-0.01em]">
          {title}
        </h3>
        <p className="grow text-base">{description}</p>
        <p className="font-mono text-[13px] text-muted">{tech.join(" · ")}</p>
        <div className="flex gap-5 border-t border-line pt-1">
          {demoLink && <CardLink href={demoLink}>Demo</CardLink>}
          <CardLink href={repoLink}>Repositorio</CardLink>
        </div>
      </div>
    </article>
  );
};

export default Card;
