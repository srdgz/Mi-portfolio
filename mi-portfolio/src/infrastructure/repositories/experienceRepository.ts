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
        period: "Dic 2024 — Sep 2026",
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
      },
      en: {
        period: "Dec 2024 — Sep 2026",
        role: "Frontend Developer",
        summary:
          "Injury-prevention platform for runners, with more than 2,000 registered users. In a development team of 4, I was responsible for the web and mobile frontend.",
        highlights: [
          "Mobile app with React Native, TypeScript and Zustand: it wouldn't even start when I joined; I got it running and extended it up to version 3.4, published on the App Store and Google Play.",
          "Web app with Vue 3 (Composition API), TypeScript, Pinia and Element Plus: from a basic MVP to new features and interface improvements.",
          "Payments with RevenueCat on mobile and Stripe on web.",
          "Automated deployment to AWS Amplify with GitHub Actions and per-environment configuration.",
          "Scrum with two-week sprints and Spec-Driven Development with Claude Code across every phase.",
        ],
      },
    },
  },
  {
    company: "Bubbo",
    tech: ["React Native", "Expo", "TypeScript", "RevenueCat", "AWS", "Detox"],
    text: {
      es: {
        period: "Ene — Sep 2024",
        role: "Desarrolladora Full-Stack",
        summary:
          "App de recomendación de películas y series en streaming para iOS y Android, con más de 150.000 descargas entre ambas tiendas.",
        highlights: [
          "Desarrollo con React Native, Expo y TypeScript, con componentes reutilizables.",
          "Suscripciones con RevenueCat; autenticación con AWS Cognito y almacenamiento en S3.",
          "Participación en los pipelines de CI/CD y en los tests end-to-end con Detox.",
        ],
      },
      en: {
        period: "Jan — Sep 2024",
        role: "Full-Stack Developer",
        summary:
          "Streaming movie and TV show recommendation app for iOS and Android, with more than 150,000 downloads across both stores.",
        highlights: [
          "Development with React Native, Expo and TypeScript, with reusable components.",
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
