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
      "https://drive.google.com/file/d/1z5lsXxu-4wA-q-d3QaZlCEsF9rnUmz1j/view?usp=sharing",
    specs: [
      { term: "Rol", detail: "Frontend · Web y Mobile" },
      { term: "Stack", detail: "React Native, Vue 3, React + TypeScript" },
      { term: "Método", detail: "Spec-Driven Development con Claude Code" },
      { term: "Ubicación", detail: "Cáceres, España" },
      { term: "Disponibilidad", detail: "Inmediata" },
    ],
  }),
  en: createProfile({
    ...common,
    cvUrl:
      "https://drive.google.com/file/d/1_QyptwUYrtT-Y9NIIbxSzA44vNOPFqmb/view?usp=sharing",
    specs: [
      { term: "Role", detail: "Frontend · Web & Mobile" },
      { term: "Stack", detail: "React Native, Vue 3, React + TypeScript" },
      { term: "Method", detail: "Spec-Driven Development with Claude Code" },
      { term: "Location", detail: "Cáceres, Spain" },
      { term: "Availability", detail: "Immediate" },
    ],
  }),
};

export const profileRepository: ProfileRepository = {
  get: (locale) => profiles[locale],
};
