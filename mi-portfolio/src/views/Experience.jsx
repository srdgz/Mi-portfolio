import Heading from "../components/Heading";
import useReveal from "../hooks/useReveal";

const jobs = [
  {
    period: "Dic 2024 — Sep 2026",
    title: "Desarrolladora Frontend · MyAlbatross",
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
    title: "Desarrolladora Full-Stack · Bubbo",
    summary:
      "App de recomendación de películas y series en streaming para iOS y Android, con más de 150.000 descargas entre ambas tiendas. Equipo de 4 desarrolladores.",
    highlights: [
      "Desarrollo con React Native, Expo y TypeScript, con componentes reutilizables.",
      "Suscripciones con RevenueCat; autenticación con AWS Cognito y almacenamiento en S3.",
      "Participación en los pipelines de CI/CD y en los tests end-to-end con Detox.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "RevenueCat", "AWS", "Detox"],
  },
  {
    period: "Sep — Dic 2023",
    title: "Desarrolladora Full-Stack · Clidefit",
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
      className="reveal mx-auto flex max-w-300 flex-col gap-10 px-5 pb-[clamp(64px,9vw,128px)] sm:px-8 lg:px-12"
    >
      <Heading label="02 — Experiencia">Dónde he trabajado.</Heading>
      <div className="flex flex-col border-b border-line">
        {jobs.map(({ period, title, summary, highlights, tech }) => (
          <article
            key={title}
            className="flex flex-wrap gap-x-12 gap-y-3 border-t border-line py-9"
          >
            <div className="flex flex-[0_0_240px] flex-col gap-1.5 pt-1.5 font-mono text-sm">
              <p className="text-accent">{period}</p>
              <p className="text-muted">Remoto</p>
            </div>
            <div className="flex flex-[1_1_420px] flex-col gap-3.5">
              <h3 className="font-display text-2xl font-bold leading-[1.15] sm:text-[28px]">
                {title}
              </h3>
              <p className="text-muted">{summary}</p>
              {highlights.length > 0 && (
                <ul className="flex list-disc flex-col gap-2 pl-5 text-muted">
                  {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
              <p className="font-mono text-[13px] text-muted">
                {tech.join(" · ")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
