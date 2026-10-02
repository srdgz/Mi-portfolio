import type { Locale } from "@/domain/entities/locale";
import type { EducationRepository } from "@/domain/repositories/EducationRepository";

export const makeGetEducation =
  (educationRepository: EducationRepository) => (locale: Locale) =>
    educationRepository.getAll(locale);
