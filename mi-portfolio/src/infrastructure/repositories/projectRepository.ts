import { LOCALES } from "@/domain/entities/locale";
import type { Locale } from "@/domain/entities/locale";
import { createProject } from "@/domain/entities/project";
import type { Project } from "@/domain/entities/project";
import type { ProjectRepository } from "@/domain/repositories/ProjectRepository";

import ApplyTrackDesktop from "@/assets/projects/ApplyTrackDesktop.png";
import ApplyTrackMobile from "@/assets/projects/ApplyTrackMobile.png";
import RoomiesDesktop from "@/assets/projects/RoomiesDesktop.png";
import RoomiesMobile from "@/assets/projects/RoomiesMobile.png";
import FrescaGoDesktop from "@/assets/projects/FrescaGoDesktop.png";
import FrescaGoMobile from "@/assets/projects/FrescaGoMobile.png";
import SmartStayDesktop from "@/assets/projects/SmartStayDesktop.png";
import SmartStayMobile from "@/assets/projects/SmartStayMobile.png";

interface ProjectText {
  label: string;
  description: string;
}

interface ProjectSource {
  title: string;
  desktopImage: string;
  mobileImage: string;
  url: string;
  tech: string[];
  repoLink: string;
  demoLink?: string;
  text: Record<Locale, ProjectText>;
}

const sources: ProjectSource[] = [
  {
    title: "ApplyTrack",
    desktopImage: ApplyTrackDesktop,
    mobileImage: ApplyTrackMobile,
    url: "applytrack-roan.vercel.app",
    tech: [
      "Vue 3",
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
    ],
    repoLink: "https://github.com/srdgz/applytrack",
    demoLink: "https://applytrack-roan.vercel.app/",
    text: {
      es: {
        label: "Web y móvil",
        description:
          "Gestor de candidaturas de empleo con web y app móvil que comparten un núcleo con arquitectura hexagonal: tablero por estados, estadísticas, modo demo sin registro y cuentas con Supabase.",
      },
      en: {
        label: "Web & mobile",
        description:
          "Job application tracker with a web and a mobile app sharing a hexagonal core: status board, stats, a no-signup demo mode and Supabase accounts.",
      },
    },
  },
  {
    title: "FrescaGo",
    desktopImage: FrescaGoDesktop,
    mobileImage: FrescaGoMobile,
    url: "frescago.vercel.app",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Firebase",
      "Stripe",
      "Tailwind CSS",
    ],
    repoLink: "https://github.com/srdgz/frescaGo",
    demoLink: "https://frescago.vercel.app/",
    text: {
      es: {
        label: "Web",
        description:
          "Tienda online de frutas y verduras bilingüe con precios en EUR/USD, pago con Stripe verificado en el backend y pedidos por usuario, con clean architecture, tests y accesibilidad WCAG.",
      },
      en: {
        label: "Web",
        description:
          "Bilingual online grocery shop with EUR/USD pricing, Stripe payments verified on the backend and per-user orders, built with clean architecture, tests and WCAG accessibility.",
      },
    },
  },
  {
    title: "SmartStay",
    desktopImage: SmartStayDesktop,
    mobileImage: SmartStayMobile,
    url: "smartstay.vercel.app",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Sanity",
      "Stripe",
      "Tailwind CSS",
    ],
    repoLink: "https://github.com/srdgz/smartstay",
    demoLink: "https://smartstay.vercel.app/",
    text: {
      es: {
        label: "Web",
        description:
          "Reserva de alojamientos bilingüe con precios en USD/EUR, búsqueda por fechas disponibles, pago con Stripe, perfil de usuario y reseñas, con clean architecture, tests y CI.",
      },
      en: {
        label: "Web",
        description:
          "Bilingual accommodation booking with USD/EUR pricing, availability search by dates, Stripe payments, user profile and reviews, built with clean architecture, tests and CI.",
      },
    },
  },
  {
    title: "RoomieConnect",
    desktopImage: RoomiesDesktop,
    mobileImage: RoomiesMobile,
    url: "roomieconnect-msl6.onrender.com",
    tech: ["React", "Tailwind CSS"],
    repoLink: "https://github.com/srdgz/RoomieConnect",
    demoLink: "https://roomieconnect-msl6.onrender.com/",
    text: {
      es: {
        label: "Web · Proyecto colaborativo",
        description:
          "Aplicación web para gestionar las tareas y los gastos compartidos entre compañeros de piso.",
      },
      en: {
        label: "Web · Team project",
        description:
          "Web app to manage chores and shared expenses between flatmates.",
      },
    },
  },
];

const toProjects = (locale: Locale): Project[] =>
  sources.map(({ text, ...project }) =>
    createProject({ ...project, ...text[locale] }),
  );

const projects = Object.fromEntries(
  LOCALES.map((locale) => [locale, toProjects(locale)]),
) as Record<Locale, Project[]>;

export const projectRepository: ProjectRepository = {
  getAll: (locale) => projects[locale],
};
