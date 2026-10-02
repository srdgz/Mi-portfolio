import { createProfile } from "@/domain/entities/profile";
import type { ProfileRepository } from "@/domain/repositories/ProfileRepository";

import photo from "@/assets/portfolio_profile.jpeg";

const profile = createProfile({
  name: "Sandra Rodríguez",
  photo,
  email: "rreyes.sandra@gmail.com",
  cvUrl:
    "https://drive.google.com/file/d/1z5lsXxu-4wA-q-d3QaZlCEsF9rnUmz1j/view?usp=sharing",
  linkedinUrl: "https://linkedin.com/in/sandra-rodriguez-reyes",
  githubUrl: "https://github.com/srdgz",
  specs: [
    { term: "Rol", detail: "Frontend · Web y Mobile" },
    { term: "Stack", detail: "React Native, Vue 3, React + TypeScript" },
    { term: "Método", detail: "Spec-Driven Development con Claude Code" },
    { term: "Modalidad", detail: "Remoto desde España" },
    { term: "Disponibilidad", detail: "Inmediata" },
  ],
});

export const profileRepository: ProfileRepository = {
  get: () => profile,
};
