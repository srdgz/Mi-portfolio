import { getExperience } from "@/container";
import Tag from "@/presentation/components/atoms/Tag";
import Heading from "@/presentation/components/molecules/Heading";
import useLanguage from "@/presentation/hooks/useLanguage";
import useReveal from "@/presentation/hooks/useReveal";

const Experience = () => {
  const ref = useReveal();
  const { locale, t } = useLanguage();
  const jobs = getExperience(locale);

  return (
    <section
      id="experiencia"
      ref={ref}
      className="reveal mx-auto flex max-w-300 flex-col gap-12 px-5 pb-[clamp(64px,9vw,128px)] sm:px-8 lg:px-12"
    >
      <Heading number="02" label={t.experience.label}>
        {t.experience.title}
      </Heading>
      <ol className="flex flex-col border-b border-line">
        {jobs.map(({ period, company, role, summary, highlights, tech }) => (
          <li
            key={company}
            className="grid gap-x-14 gap-y-5 border-t border-line py-10 lg:grid-cols-[300px_1fr]"
          >
            <div className="flex flex-col gap-2 lg:sticky lg:top-28 lg:self-start">
              <p className="font-mono text-sm text-accent">{period}</p>
              <h3 className="font-display text-[clamp(30px,3.4vw,42px)] leading-none font-bold tracking-tight">
                {company}
              </h3>
              <p className="font-mono text-[13px] text-muted">
                {role} · {t.experience.remote}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-lg">{summary}</p>
              {highlights.length > 0 && (
                <ul className="flex flex-col gap-3 text-muted">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="font-mono text-warm" aria-hidden="true">
                        →
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
              <ul className="flex flex-wrap gap-2 font-mono text-[13px] text-muted">
                {tech.map((name) => (
                  <Tag key={name}>{name}</Tag>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
