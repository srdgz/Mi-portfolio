import type { ProjectRepository } from "@/domain/repositories/ProjectRepository";

export const makeGetProjects = (projectRepository: ProjectRepository) => () =>
  projectRepository.getAll();
