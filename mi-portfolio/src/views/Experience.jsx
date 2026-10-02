import Heading from "../components/Heading";
import useReveal from "../hooks/useReveal";

const jobs = [
  {
    period: "Dic 2024 — Sep 2026",
    company: "MyAlbatross",
    role: "Desarrolladora Frontend",
    summary:
      "Plataforma de prevención de lesiones para corredores, con más de 2.000 usuarios registrados. En un equipo de desarrollo de 4 personas, llevaba el frontend web y móvil.",
    highlights: [
      "App móvil con React Native, TypeScript y Zustand: no llegaba a arrancar cuando me incorporé; la puse en funcionamiento y la amplié hasta la versión 3.4, publicada en App Store y Google Play.",
      "Web con Vue 3 (Composition API), TypeScript, Pinia y Element Plus: de un MVP básico a nuevas funcionalidades y mejoras de interfaz.",
      "Pagos con RevenueCat en móvil y Stripe en web.",
      "Despliegue automático en AWS Amplify con GitHub Actions y configuración por entorno.",
      "Scrum con sprints de dos semanas y Spec-Driven Development con Claude Code en todas las fases.",
    ],
    tech: [
      "React Native",
      "Vue 3",
      "TypeScript",
      "Stripe",
      "RevenueCat",
      "AWS Amplify",
    ],
  },
  {
    period: "Ene — Sep 2024",
    company: "Bubbo",
    role: "Desarrolladora Full-Stack",
    summary:
      "App de recomendación de películas y series en streaming para iOS y Android, con más de 150.000 descargas entre ambas tiendas.",
    highlights: [
      "Desarrollo con React Native, Expo y TypeScript, con componentes reutilizables.",
      "Suscripciones con RevenueCat; autenticación con AWS Cognito y almacenamiento en S3.",
      "Participación en los pipelines de CI/CD y en los tests end-to-end con Detox.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "RevenueCat", "AWS", "Detox"],
  },
  {
    period: "Sep — Dic 2023",
    company: "Clidefit",
    role: "Desarrolladora Full-Stack",
    summary:
      "Web de la empresa con React y Tailwind CSS, con reservas online y respuestas automáticas por email.",
    highlights: [],
    tech: ["React", "Tailwind CSS"],
  },
];

const Experience = () => {
  const ref = useReveal();

  return (
    <section
      id="experiencia"
      ref={ref}
      className="reveal mx-auto flex max-w-300 flex-col gap-12 px-5 pb-[clamp(64px,9vw,128px)] sm:px-8 lg:px-12"
    >
      <Heading number="02" label="Experiencia">
        Dónde he trabajado.
      </Heading>
      <ol className="flex flex-col border-b border-line">
        {jobs.map(({ period, company, role, summary, highlights, tech }) => (
          <li
            key={company}
            className="grid gap-x-14 gap-y-5 border-t border-line py-10 lg:grid-cols-[300px_1fr]"
          >
            <div className="flex flex-col gap-2 lg:sticky lg:top-28 lg:self-start">
              <p className="font-mono text-sm text-accent">{period}</p>
              <h3 className="font-display text-[clamp(30px,3.4vw,42px)] font-bold leading-none tracking-tight">
                {company}
              </h3>
              <p className="font-mono text-[13px] text-muted">
                {role} · Remoto
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-lg">{summary}</p>
              {highlights.length > 0 && (
                <ul className="flex flex-col gap-3 text-muted">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span
                        className="font-mono text-warm"
                        aria-hidden="true"
                      >
                        →
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
              <ul className="flex flex-wrap gap-2 font-mono text-[13px] text-muted">
                {tech.map((name) => (
                  <li
                    key={name}
                    className="rounded-md border border-line px-2.5 py-1"
                  >
                    {name}
                  </li>
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
