import type { Locale } from "@/domain/entities/locale";
import type { Project } from "@/domain/entities/project";

export interface ProjectRepository {
  getAll: (locale: Locale) => Project[];
}
