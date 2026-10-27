import { createJob } from "@/domain/entities/job";
import type { Job } from "@/domain/entities/job";
import { LOCALES } from "@/domain/entities/locale";
import type { Locale } from "@/domain/entities/locale";
import type { ExperienceRepository } from "@/domain/repositories/ExperienceRepository";

interface JobText {
  period: string;
  role: string;
  summary: string;
  highlights: string[];
}

interface JobSource {
  company: string;
  tech: string[];
  text: Record<Locale, JobText>;
}

const sources: JobSource[] = [
  {
    company: "MyAlbatross",
    tech: [
      "React Native",
      "Vue 3",
      "TypeScript",
      "Stripe",
      "RevenueCat",
      "AWS Amplify",
    ],
    text: {
      es: {
        period: "Dic 2024 — Oct 2026",
        role: "Desarrolladora Frontend",
        summary:
          "Plataforma de prevención de lesiones para corredores y planificador para entrenadores, con más de 2.000 usuarios registrados. En un equipo de desarrollo de 4 personas, llevaba el frontend web y móvil.",
        highlights: [
          "App móvil con React Native, TypeScript y Zustand: no llegaba a arrancar cuando me incorporé; la puse en funcionamiento y la amplié hasta la versión 3.4, publicada en App Store y Google Play.",
          "Web con Vue 3 (Composition API), TypeScript, Pinia y Element Plus: de un MVP básico a nuevas funcionalidades y mejoras de interfaz.",
          "Integración de Stripe en web y RevenueCat en móvil, los dos sistemas por los que pasaban todos los cobros de la plataforma.",
          "Despliegue automático en AWS Amplify con GitHub Actions y configuración por entorno.",
          "Scrum con sprints de dos semanas, Jira y revisión de pull requests en GitHub. Spec-Driven Development con Claude Code en especificación, implementación, testing y documentación.",
        ],
      },
      en: {
        period: "Dec 2024 — Oct 2026",
        role: "Frontend Developer",
        summary:
          "Injury-prevention platform for runners and planner for coaches, with more than 2,000 registered users. In a development team of 4, I was responsible for the web and mobile frontend.",
        highlights: [
          "Mobile app with React Native, TypeScript and Zustand: it wouldn't even start when I joined; I got it running and extended it up to version 3.4, published on the App Store and Google Play.",
          "Web app with Vue 3 (Composition API), TypeScript, Pinia and Element Plus: from a basic MVP to new features and interface improvements.",
          "Integrated Stripe on web and RevenueCat on mobile, the two systems that handled every payment on the platform.",
          "Automated deployment to AWS Amplify with GitHub Actions and per-environment configuration.",
          "Scrum with two-week sprints, Jira and pull request reviews on GitHub. Spec-Driven Development with Claude Code across specification, implementation, testing and documentation.",
        ],
      },
    },
  },
  {
    company: "Bubbo",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Python",
      "AWS Lambda",
      "DynamoDB",
      "RevenueCat",
      "Detox",
    ],
    text: {
      es: {
        period: "Ene — Sep 2024",
        role: "Desarrolladora Full-Stack",
        summary:
          "App de recomendación de películas y series para iOS y Android, con más de 150.000 descargas entre ambas stores.",
        highlights: [
          "Desarrollo con React Native, Expo y TypeScript, con componentes reutilizables.",
          "Despliegue en Google Play Store y App Store con EAS.",
          "Backend: desarrollo y modificación de funciones AWS Lambda en Python con base de datos DynamoDB.",
          "Suscripciones con RevenueCat; autenticación con AWS Cognito y almacenamiento en S3.",
          "Participación en los pipelines de CI/CD y en los tests end-to-end con Detox.",
        ],
      },
      en: {
        period: "Jan — Sep 2024",
        role: "Full-Stack Developer",
        summary:
          "Movie and TV show recommendation app for iOS and Android, with more than 150,000 downloads across both stores.",
        highlights: [
          "Development with React Native, Expo and TypeScript, with reusable components.",
          "Releases to the Google Play Store and the App Store with EAS.",
          "Backend: built and updated AWS Lambda functions in Python with a DynamoDB database.",
          "Subscriptions with RevenueCat; authentication with AWS Cognito and storage on S3.",
          "Contributed to the CI/CD pipelines and the end-to-end tests with Detox.",
        ],
      },
    },
  },
  {
    company: "Clidefit",
    tech: ["React", "Tailwind CSS"],
    text: {
      es: {
        period: "Sep — Dic 2023",
        role: "Desarrolladora Full-Stack",
        summary:
          "Web de la empresa con React y Tailwind CSS, con reservas online y respuestas automáticas por email.",
        highlights: [],
      },
      en: {
        period: "Sep — Dec 2023",
        role: "Full-Stack Developer",
        summary:
          "Company website built with React and Tailwind CSS, with online booking and automated email replies.",
        highlights: [],
      },
    },
  },
];

const toJobs = (locale: Locale): Job[] =>
  sources.map(({ text, ...job }) => createJob({ ...job, ...text[locale] }));

const jobs = Object.fromEntries(
  LOCALES.map((locale) => [locale, toJobs(locale)]),
) as Record<Locale, Job[]>;

export const experienceRepository: ExperienceRepository = {
  getAll: (locale) => jobs[locale],
};
