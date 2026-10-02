import type { EducationRepository } from "@/domain/repositories/EducationRepository";

export const makeGetEducation =
  (educationRepository: EducationRepository) => () =>
    educationRepository.getAll();
