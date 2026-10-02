import { createJob } from "@/domain/entities/job";
import type { JobInput } from "@/domain/entities/job";
import type { ExperienceRepository } from "@/domain/repositories/ExperienceRepository";

const jobInputs: JobInput[] = [
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

const jobs = jobInputs.map(createJob);

export const experienceRepository: ExperienceRepository = {
  getAll: () => jobs,
};
