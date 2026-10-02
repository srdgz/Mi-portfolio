import type { Locale } from "@/domain/entities/locale";

const es = {
  meta: {
    title: "Sandra Rodríguez | Desarrolladora Frontend · Web y Mobile",
    description:
      "Soy Sandra Rodríguez, desarrolladora frontend web y móvil. Trabajo con React Native, Vue 3, React y TypeScript. Explora mi portfolio para conocer mi experiencia y mis proyectos.",
  },
  language: {
    label: "Idioma",
    es: "Español",
    en: "Inglés",
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
    kicker: "Desarrolladora Frontend · Web y Mobile",
    titleStart: "Apps web y móviles que llegan a",
    titleHighlight: "producción",
    intro:
      "Soy Sandra. Desarrollo frontend con React Native, Vue 3 y React, siempre con TypeScript. He trabajado en apps publicadas en App Store y Google Play, con pagos y suscripciones.",
    contact: "Contacta conmigo",
    experience: "Ver experiencia",
    linkedin: "Perfil de LinkedIn de Sandra Rodríguez",
    github: "Perfil de GitHub de Sandra Rodríguez",
    photoAlt: "Retrato de Sandra Rodríguez",
    availability: "Disponibilidad inmediata",
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
      "Mi terreno es el frontend web y móvil: apps en producción con pagos y suscripciones (Stripe, RevenueCat), publicación en App Store y Google Play, y despliegue continuo con GitHub Actions y AWS Amplify.",
    method:
      "En el último año me he apoyado en Spec-Driven Development (SDD) con Claude Code en todas las fases: spec técnica, implementación, testing y documentación.",
    goal: "Busco aportar mi experiencia como desarrolladora frontend web y móvil en proyectos innovadores que me permitan crecer profesionalmente.",
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
    title: "Sandra Rodríguez | Frontend Developer · Web & Mobile",
    description:
      "I'm Sandra Rodríguez, a web and mobile frontend developer. I work with React Native, Vue 3, React and TypeScript. Explore my portfolio to see my experience and projects.",
  },
  language: {
    label: "Language",
    es: "Spanish",
    en: "English",
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
    kicker: "Frontend Developer · Web & Mobile",
    titleStart: "Web and mobile apps that make it to",
    titleHighlight: "production",
    intro:
      "I'm Sandra. I build frontends with React Native, Vue 3 and React, always with TypeScript. I've worked on apps published on the App Store and Google Play, with payments and subscriptions.",
    contact: "Get in touch",
    experience: "See experience",
    linkedin: "Sandra Rodríguez's LinkedIn profile",
    github: "Sandra Rodríguez's GitHub profile",
    photoAlt: "Portrait of Sandra Rodríguez",
    availability: "Available immediately",
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
      "My field is web and mobile frontend: production apps with payments and subscriptions (Stripe, RevenueCat), releases on the App Store and Google Play, and continuous deployment with GitHub Actions and AWS Amplify.",
    method:
      "Over the last year I've relied on Spec-Driven Development (SDD) with Claude Code across every phase: technical spec, implementation, testing and documentation.",
    goal: "I'm looking to bring my experience as a web and mobile frontend developer to innovative projects where I can keep growing professionally.",
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
