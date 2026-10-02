import type { Locale } from "@/domain/entities/locale";
import type { ProjectRepository } from "@/domain/repositories/ProjectRepository";

export const makeGetProjects =
  (projectRepository: ProjectRepository) => (locale: Locale) =>
    projectRepository.getAll(locale);
