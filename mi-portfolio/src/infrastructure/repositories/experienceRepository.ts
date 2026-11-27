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
    company: "myalbatross",
    tech: [
      "React Native",
      "Reanimated",
      "Vue 3",
      "TypeScript",
      "Zustand",
      "Pinia",
      "Stripe",
      "RevenueCat",
      "OAuth",
      "SSE",
      "AWS Amplify",
    ],
    text: {
      es: {
        period: "Dic 2024 — Oct 2026",
        role: "Desarrolladora Frontend",
        summary:
          "Plataforma de prevención de lesiones y planificación de entrenos para corredores y entrenadores, con más de 2.000 usuarios registrados. Equipo de 4 desarrolladores; desde el cuarto mes asumí sola todo el frontend de la app y la web.",
        highlights: [
          "App móvil con React Native CLI, TypeScript, Zustand y Reanimated. No arrancaba cuando me incorporé: la puse en funcionamiento (dependencias nativas, pods y Gradle), la actualicé de React Native 0.64 a 0.82 y la llevé hasta la versión 3.4 en App Store y Google Play.",
          "Web con Vue 3 (Composition API), TypeScript, Pinia y Element Plus. Amplié la plataforma desde un MVP básico con informes de actividad generados por IA, chat con asistente IA, gráficos, calendario y carga de datos en tiempo real con SSE.",
          "Interfaz sin equipo de diseño: definí las pantallas nuevas y el rediseño visual. Chat en tiempo real entre entrenador y atleta, y app y web en español e inglés.",
          "Pagos: Stripe para la suscripción de los entrenadores y los cobros a sus atletas, y RevenueCat para las suscripciones móviles. Propuse validar en el backend los códigos de descuento de las stores, y se implementó así.",
          "Autenticación OAuth con Google y Apple, y con email.",
          "Publicación manual de cada versión móvil (TestFlight y pruebas internas antes de revisión), y CI/CD de la web con GitHub Actions y AWS Amplify.",
          "Scrum con sprints de dos semanas, Jira y revisión de pull requests. Spec-Driven Development con Claude Code en especificación, implementación, documentación y validación.",
        ],
      },
      en: {
        period: "Dec 2024 — Oct 2026",
        role: "Frontend Developer",
        summary:
          "Injury-prevention and training-planning platform for runners and coaches, with more than 2,000 registered users. Team of 4 developers; from the fourth month on, I took over the whole frontend of the app and the web on my own.",
        highlights: [
          "Mobile app with React Native CLI, TypeScript, Zustand and Reanimated. It wouldn't start when I joined: I got it running (native dependencies, pods and Gradle), upgraded it from React Native 0.64 to 0.82 and took it up to version 3.4 on the App Store and Google Play.",
          "Web app with Vue 3 (Composition API), TypeScript, Pinia and Element Plus. I grew the platform from a basic MVP with AI-generated activity reports, an AI assistant chat, charts, a calendar and real-time data loading with SSE.",
          "Interface without a design team: I defined the new screens and the visual redesign. Real-time chat between coach and athlete, and the app and web in Spanish and English.",
          "Payments: Stripe for the coaches' subscriptions and their charges to athletes, and RevenueCat for mobile subscriptions. I proposed validating the stores' discount codes on the backend, and it was built that way.",
          "OAuth sign-in with Google and Apple, plus email.",
          "Manual release of every mobile version (TestFlight and internal testing before review), and web CI/CD with GitHub Actions and AWS Amplify.",
          "Scrum with two-week sprints, Jira and pull request reviews. Spec-Driven Development with Claude Code across specification, implementation, documentation and validation.",
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
      "Context API",
      "Python",
      "AWS Lambda",
      "DynamoDB",
      "RevenueCat",
      "OAuth",
      "Detox",
    ],
    text: {
      es: {
        period: "Ene — Sep 2024",
        role: "Desarrolladora Full-Stack",
        summary:
          "App de recomendación de películas y series para iOS y Android, con más de 150.000 descargas. Equipo de 3 desarrolladores.",
        highlights: [
          "Frontend con React Native, Expo, TypeScript y Context API: catálogo conectado a la API de The Movie Database (TMDB), con filtros, guardado de títulos y reproducción de tráileres.",
          "Autenticación OAuth con Google y Apple y con email; suscripciones con RevenueCat.",
          "Backend: desarrollo y modificación de funciones AWS Lambda en Python con DynamoDB; configuración de Cognito y S3.",
          "Publicación en ambas stores con EAS y tests end-to-end con Detox antes de cada release.",
        ],
      },
      en: {
        period: "Jan — Sep 2024",
        role: "Full-Stack Developer",
        summary:
          "Movie and TV show recommendation app for iOS and Android, with more than 150,000 downloads. Team of 3 developers.",
        highlights: [
          "Frontend with React Native, Expo, TypeScript and Context API: a catalogue connected to The Movie Database (TMDB) API, with filters, saved titles and trailer playback.",
          "OAuth sign-in with Google and Apple, plus email; subscriptions with RevenueCat.",
          "Backend: built and updated AWS Lambda functions in Python with DynamoDB; set up Cognito and S3.",
          "Releases to both stores with EAS and end-to-end tests with Detox before every release.",
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
