import { LOCALES } from "@/domain/entities/locale";
import type { Locale } from "@/domain/entities/locale";
import { createProject } from "@/domain/entities/project";
import type { Project } from "@/domain/entities/project";
import type { ProjectRepository } from "@/domain/repositories/ProjectRepository";

import ApplyTrackDesktop from "@/assets/projects/ApplyTrackDesktop.png";
import ApplyTrackMobile from "@/assets/projects/ApplyTrackMobile.png";
import CompisDesktop from "@/assets/projects/CompisDesktop.png";
import CompisMobile from "@/assets/projects/CompisMobile.png";
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
    tech: ["Vue 3", "React Native", "TypeScript", "Supabase", "PostgreSQL"],
    repoLink: "https://github.com/srdgz/applytrack",
    demoLink: "https://applytrack-roan.vercel.app/",
    text: {
      es: {
        label: "Fullstack · Web y móvil",
        description:
          "Gestor de candidaturas con web en Vue 3 y app en React Native que comparten un núcleo con arquitectura hexagonal. Backend en Supabase con esquema SQL propio (políticas RLS, funciones y trigger), acceso por enlace mágico, accesibilidad WCAG 2.2 AA, tests y CI.",
      },
      en: {
        label: "Fullstack · Web & mobile",
        description:
          "Job application tracker with a Vue 3 web app and a React Native app sharing a hexagonal core. Supabase backend with its own SQL schema (RLS policies, functions and a trigger), magic-link sign-in, WCAG 2.2 AA accessibility, tests and CI.",
      },
    },
  },
  {
    title: "Compis",
    desktopImage: CompisDesktop,
    mobileImage: CompisMobile,
    url: "compis-app.vercel.app",
    tech: ["React", "TypeScript", "Python", "Flask", "PostgreSQL", "PayPal"],
    repoLink: "https://github.com/srdgz/compis",
    demoLink: "https://compis-app.vercel.app/",
    text: {
      es: {
        label: "Fullstack · Web y PWA",
        description:
          "Gestión de un piso compartido (tareas, compra, gastos y deudas) con frontend en React y TypeScript y API REST en Flask con clean architecture, JWT, SQLAlchemy y PostgreSQL. Pagos entre compañeros con PayPal.Me y confirmación del acreedor, PWA instalable, accesibilidad WCAG 2.2 AA, tests end-to-end y CI/CD.",
      },
      en: {
        label: "Fullstack · Web & PWA",
        description:
          "Shared-flat management (tasks, shopping, expenses and debts) with a React and TypeScript frontend and a Flask REST API built with clean architecture, JWT, SQLAlchemy and PostgreSQL. Payments between flatmates with PayPal.Me and creditor confirmation, an installable PWA, WCAG 2.2 AA accessibility, end-to-end tests and CI/CD.",
      },
    },
  },
  {
    title: "SmartStay",
    desktopImage: SmartStayDesktop,
    mobileImage: SmartStayMobile,
    url: "smartstay.vercel.app",
    tech: ["Next.js", "TypeScript", "API REST", "NextAuth", "Sanity", "Stripe"],
    repoLink: "https://github.com/srdgz/smartstay",
    demoLink: "https://smartstay.vercel.app/",
    text: {
      es: {
        label: "Fullstack · Web",
        description:
          "Reserva de alojamientos con API REST en Next.js (disponibilidad, reservas y reseñas), acceso con NextAuth (email y contraseña, y OAuth con Google y GitHub), Sanity como CMS y pagos con Stripe con webhook verificado. Bilingüe, con arquitectura por capas, tests (también de accesibilidad) y CI.",
      },
      en: {
        label: "Fullstack · Web",
        description:
          "Accommodation booking with a Next.js REST API (availability, bookings and reviews), NextAuth sign-in (email and password, and OAuth with Google and GitHub), Sanity as CMS and Stripe payments with a verified webhook. Bilingual, with a layered architecture, tests (including accessibility) and CI.",
      },
    },
  },
  {
    title: "FrescaGo",
    desktopImage: FrescaGoDesktop,
    mobileImage: FrescaGoMobile,
    url: "frescago.vercel.app",
    tech: ["React", "TypeScript", "Node.js", "Express", "Firebase", "Stripe"],
    repoLink: "https://github.com/srdgz/frescaGo",
    demoLink: "https://frescago.vercel.app/",
    text: {
      es: {
        label: "Fullstack · Web",
        description:
          "Tienda online de frutas y verduras bilingüe con precios en EUR/USD, API REST en Node.js y Express (catálogo, tipos de cambio y pago con Stripe verificado en el servidor) y Firebase para autenticación y pedidos. Con clean architecture, accesibilidad WCAG, tests y CI.",
      },
      en: {
        label: "Fullstack · Web",
        description:
          "Bilingual online grocery shop with EUR/USD pricing, a Node.js and Express REST API (catalogue, exchange rates and Stripe payments verified on the server) and Firebase for sign-in and orders. Built with clean architecture, WCAG accessibility, tests and CI.",
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
