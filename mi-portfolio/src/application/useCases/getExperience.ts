import type { Locale } from "@/domain/entities/locale";
import type { ExperienceRepository } from "@/domain/repositories/ExperienceRepository";

export const makeGetExperience =
  (experienceRepository: ExperienceRepository) => (locale: Locale) =>
    experienceRepository.getAll(locale);
