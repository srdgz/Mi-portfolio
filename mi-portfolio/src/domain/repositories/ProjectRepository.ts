import type { Project } from "@/domain/entities/project";

export interface ProjectRepository {
  getAll: () => Project[];
}
