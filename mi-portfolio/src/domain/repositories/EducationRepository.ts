import type { Study } from "@/domain/entities/study";

export interface EducationRepository {
  getAll: () => Study[];
}
