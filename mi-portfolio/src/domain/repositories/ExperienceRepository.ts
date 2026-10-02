import type { Job } from "@/domain/entities/job";

export interface ExperienceRepository {
  getAll: () => Job[];
}
