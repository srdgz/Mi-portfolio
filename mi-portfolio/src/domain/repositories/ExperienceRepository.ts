import type { Job } from "@/domain/entities/job";
import type { Locale } from "@/domain/entities/locale";

export interface ExperienceRepository {
  getAll: (locale: Locale) => Job[];
}
