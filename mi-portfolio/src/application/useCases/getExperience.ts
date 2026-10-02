import type { ExperienceRepository } from "@/domain/repositories/ExperienceRepository";

export const makeGetExperience =
  (experienceRepository: ExperienceRepository) => () =>
    experienceRepository.getAll();
