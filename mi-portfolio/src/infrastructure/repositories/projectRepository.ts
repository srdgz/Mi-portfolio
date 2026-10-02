import { LOCALES } from "@/domain/entities/locale";
import type { Locale } from "@/domain/entities/locale";
import { createProject } from "@/domain/entities/project";
import type { Project } from "@/domain/entities/project";
import type { ProjectRepository } from "@/domain/repositories/ProjectRepository";

import RoomiesDesktop from "@/assets/projects/RoomiesDesktop.png";
import RoomiesMobile from "@/assets/projects/RoomiesMobile.png";
import FrescaGoDesktop from "@/assets/projects/FrescaGoDesktop.png";
import FrescaGoMobile from "@/assets/projects/FrescaGoMobile.png";
import CookiesDesktop from "@/assets/projects/CookiesDesktop.png";
import CookiesMobile from "@/assets/projects/CookiesMobile.png";
import SmartStayDesktop from "@/assets/projects/SmartStayDesktop.png";
import SmartStayMobile from "@/assets/projects/SmartStayMobile.png";
import WallifyDesktop from "@/assets/projects/WallifyDesktop.png";
import WallifyMobile from "@/assets/projects/WallifyMobile.png";

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
    title: "FrescaGo",
    desktopImage: FrescaGoDesktop,
    mobileImage: FrescaGoMobile,
    url: "frescago.vercel.app",
    tech: ["React", "Tailwind CSS", "Node.js", "Firebase", "Stripe"],
    repoLink: "https://github.com/srdgz/frescaGo",
    demoLink: "https://frescago.vercel.app/",
    text: {
      es: {
        label: "Web",
        description:
          "E-commerce con una experiencia de compra en línea completa, incluidos los pagos.",
      },
      en: {
        label: "Web",
        description:
          "E-commerce with a complete online shopping experience, including payments.",
      },
    },
  },
  {
    title: "SmartStay",
    desktopImage: SmartStayDesktop,
    mobileImage: SmartStayMobile,
    url: "smartstay.vercel.app",
    tech: ["Next.js", "Sanity", "Tailwind CSS", "Stripe"],
    repoLink: "https://github.com/srdgz/smartstay",
    demoLink: "https://smartstay.vercel.app/",
    text: {
      es: {
        label: "Web",
        description:
          "Reserva de alojamientos con pago mediante Stripe, reviews y panel de usuario para gestionar las reservas.",
      },
      en: {
        label: "Web",
        description:
          "Accommodation booking with Stripe payments, reviews and a user dashboard to manage bookings.",
      },
    },
  },
  {
    title: "Wallify",
    desktopImage: WallifyDesktop,
    mobileImage: WallifyMobile,
    url: "github.com/srdgz/wallify-app",
    tech: ["React Native", "TypeScript", "Expo", "Pixabay API"],
    repoLink: "https://github.com/srdgz/wallify-app",
    text: {
      es: {
        label: "Móvil",
        description:
          "App para explorar y descargar fondos de pantalla, con filtros por formato, color y temática.",
      },
      en: {
        label: "Mobile",
        description:
          "App to browse and download wallpapers, with filters by format, colour and theme.",
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
  {
    title: "Cookies & Cream",
    desktopImage: CookiesDesktop,
    mobileImage: CookiesMobile,
    url: "cookies-front-pied.vercel.app",
    tech: ["React", "Bootstrap", "Node.js", "Express"],
    repoLink: "https://github.com/srdgz/cookies-front",
    demoLink: "https://cookies-front-pied.vercel.app/",
    text: {
      es: {
        label: "Web",
        description:
          "Landing page de una pastelería ficticia con información sobre sus productos y tiendas.",
      },
      en: {
        label: "Web",
        description:
          "Landing page for a fictional bakery with information about its products and shops.",
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
