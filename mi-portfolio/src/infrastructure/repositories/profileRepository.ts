import type { Locale } from "@/domain/entities/locale";
import { createProfile } from "@/domain/entities/profile";
import type { Profile } from "@/domain/entities/profile";
import type { ProfileRepository } from "@/domain/repositories/ProfileRepository";

import photo from "@/assets/portfolio_profile.jpeg";

const common = {
  name: "Sandra Rodríguez",
  photo,
  email: "rreyes.sandra@gmail.com",
  linkedinUrl: "https://linkedin.com/in/sandra-rodriguez-reyes",
  githubUrl: "https://github.com/srdgz",
};

const profiles: Record<Locale, Profile> = {
  es: createProfile({
    ...common,
    cvUrl:
      "https://drive.google.com/file/d/1qFetgVY4hqM85yEFad3KtuNWcE-9sqMr/view?usp=sharing",
    specs: [
      { term: "Rol", detail: "Fullstack · Web, Mobile y Backend" },
      {
        term: "Stack",
        detail: "Vue 3, React, React Native, Node.js, Python + TypeScript",
      },
      { term: "Método", detail: "Spec-Driven Development con Claude Code" },
      { term: "Ubicación", detail: "Cáceres, España (remoto)" },
      { term: "Disponibilidad", detail: "Inmediata" },
    ],
  }),
  en: createProfile({
    ...common,
    cvUrl:
      "https://drive.google.com/file/d/1oD2zPi9wBkfhvmBjNxQKzeGwO9zBIuwD/view?usp=sharing",
    specs: [
      { term: "Role", detail: "Fullstack · Web, Mobile & Backend" },
      {
        term: "Stack",
        detail: "Vue 3, React, React Native, Node.js, Python + TypeScript",
      },
      { term: "Method", detail: "Spec-Driven Development with Claude Code" },
      { term: "Location", detail: "Cáceres, Spain (remote)" },
      { term: "Availability", detail: "Immediate" },
    ],
  }),
};

export const profileRepository: ProfileRepository = {
  get: (locale) => profiles[locale],
};
