import type { Locale } from "@/domain/entities/locale";
import type { Study } from "@/domain/entities/study";

export interface EducationRepository {
  getAll: (locale: Locale) => Study[];
}
