import type { Locale } from "@/domain/entities/locale";

const es = {
  meta: {
    title:
      "Sandra Rodríguez | Desarrolladora Fullstack · Web, Mobile y Backend",
    description:
      "Soy Sandra Rodríguez, desarrolladora fullstack. Construyo aplicaciones web y móviles con Vue 3, React, React Native y TypeScript, y APIs con Node.js y Python. Explora mi portfolio para conocer mi experiencia y mis proyectos.",
  },
  language: {
    label: "Idioma",
    es: "Español",
    en: "Inglés",
    switchTo: {
      es: "Cambiar a español",
      en: "Cambiar a inglés",
    },
  },
  theme: {
    toLight: "Cambiar a tema claro",
    toDark: "Cambiar a tema oscuro",
  },
  nav: {
    main: "Principal",
    mobile: "Principal móvil",
    openMenu: "Desplegar menú",
    closeMenu: "Cerrar menú",
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
  },
  cv: {
    label: "Descargar CV",
    ariaLabel: "Descargar currículum vitae",
  },
  hero: {
    kicker: "Desarrolladora Fullstack · Web, Mobile y Backend",
    titleStart: "Apps web y móviles que llegan a",
    titleHighlight: "producción",
    intro:
      "Soy Sandra. Desarrollo aplicaciones web y móviles de principio a fin: interfaces con Vue 3, React y React Native, y backend con Node.js, Python y PostgreSQL, siempre con TypeScript. He llevado apps a App Store y Google Play, con pagos y suscripciones.",
    contact: "Contacta conmigo",
    experience: "Ver experiencia",
    linkedin: "Perfil de LinkedIn de Sandra Rodríguez",
    github: "Perfil de GitHub de Sandra Rodríguez",
    photoAlt: "Retrato de Sandra Rodríguez",
    availability: "Buscando nuevos retos",
  },
  about: {
    label: "Sobre mí",
    title: "Un cambio de rumbo en 2023.",
    leadStart:
      "En 2023 di un giro a mi carrera profesional hacia el desarrollo de software. Desde entonces llevo",
    leadHighlight: "tres años",
    leadEnd:
      "trabajando como desarrolladora, siempre en posiciones de alto impacto y en productos punteros.",
    field:
      "Trabajo en todo el producto. En frontend, apps web y móviles en producción con pagos y suscripciones (Stripe, RevenueCat) y publicadas en App Store y Google Play. En backend, APIs REST y servicios con Node.js y Python, funciones serverless en AWS Lambda y bases de datos como PostgreSQL, Supabase y DynamoDB. Y despliegue continuo con GitHub Actions y AWS Amplify.",
    method:
      "En el último año me he apoyado en Spec-Driven Development (SDD) con Claude Code en todas las fases: spec técnica, implementación, testing y documentación.",
    goal: "Busco aportar mi experiencia como desarrolladora fullstack en proyectos innovadores que me permitan crecer profesionalmente.",
    specSheet: "Ficha técnica",
  },
  experience: {
    label: "Experiencia",
    title: "Dónde he trabajado.",
    remote: "Remoto",
  },
  projects: {
    label: "Proyectos",
    title: "Proyectos personales.",
    demo: "Ver demo",
    repository: "Repositorio",
    desktopAlt: (title: string) => `Captura de ${title} en escritorio`,
    mobileAlt: (title: string) => `Captura de ${title} en móvil`,
  },
  education: {
    label: "Formación",
    title: "Lo que he estudiado.",
  },
  contact: {
    label: "Contacto",
    titleStart: "¿Hablamos",
    titleEnd: "?",
    email: "Escríbeme un email",
    copy: "Copiar",
    copied: "Email copiado",
    copyError: "No se ha podido copiar el email",
  },
  notFound: {
    title: "Página no encontrada",
    text: "Lo siento, la página que estás buscando no existe",
    back: "Volver al inicio",
  },
};

export type Messages = typeof es;

const en: Messages = {
  meta: {
    title: "Sandra Rodríguez | Fullstack Developer · Web, Mobile & Backend",
    description:
      "I'm Sandra Rodríguez, a fullstack developer. I build web and mobile apps with Vue 3, React, React Native and TypeScript, and APIs with Node.js and Python. Explore my portfolio to see my experience and projects.",
  },
  language: {
    label: "Language",
    es: "Spanish",
    en: "English",
    switchTo: {
      es: "Switch to Spanish",
      en: "Switch to English",
    },
  },
  theme: {
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },
  nav: {
    main: "Main",
    mobile: "Mobile main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  cv: {
    label: "Download CV",
    ariaLabel: "Download curriculum vitae",
  },
  hero: {
    kicker: "Fullstack Developer · Web, Mobile & Backend",
    titleStart: "Web and mobile apps that make it to",
    titleHighlight: "production",
    intro:
      "I'm Sandra. I build web and mobile apps end to end: interfaces with Vue 3, React and React Native, and backends with Node.js, Python and PostgreSQL, always with TypeScript. I've shipped apps to the App Store and Google Play, with payments and subscriptions.",
    contact: "Get in touch",
    experience: "See experience",
    linkedin: "Sandra Rodríguez's LinkedIn profile",
    github: "Sandra Rodríguez's GitHub profile",
    photoAlt: "Portrait of Sandra Rodríguez",
    availability: "Looking for new challenges",
  },
  about: {
    label: "About",
    title: "A change of course in 2023.",
    leadStart:
      "In 2023 I shifted my career towards software development. Since then I've spent",
    leadHighlight: "three years",
    leadEnd:
      "working as a developer, always in high-impact roles and on leading products.",
    field:
      "I work across the whole product. On the frontend, production web and mobile apps with payments and subscriptions (Stripe, RevenueCat), published on the App Store and Google Play. On the backend, REST APIs and services with Node.js and Python, serverless functions on AWS Lambda and databases such as PostgreSQL, Supabase and DynamoDB. And continuous deployment with GitHub Actions and AWS Amplify.",
    method:
      "Over the last year I've relied on Spec-Driven Development (SDD) with Claude Code across every phase: technical spec, implementation, testing and documentation.",
    goal: "I'm looking to bring my experience as a fullstack developer to innovative projects where I can keep growing professionally.",
    specSheet: "Spec sheet",
  },
  experience: {
    label: "Experience",
    title: "Where I've worked.",
    remote: "Remote",
  },
  projects: {
    label: "Projects",
    title: "Personal projects.",
    demo: "View demo",
    repository: "Repository",
    desktopAlt: (title: string) => `Screenshot of ${title} on desktop`,
    mobileAlt: (title: string) => `Screenshot of ${title} on mobile`,
  },
  education: {
    label: "Education",
    title: "What I've studied.",
  },
  contact: {
    label: "Contact",
    titleStart: "Shall we talk",
    titleEnd: "?",
    email: "Send me an email",
    copy: "Copy",
    copied: "Email copied",
    copyError: "Couldn't copy the email",
  },
  notFound: {
    title: "Page not found",
    text: "Sorry, the page you're looking for doesn't exist",
    back: "Back to home",
  },
};

export const messages: Record<Locale, Messages> = { es, en };
