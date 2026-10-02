import type { Locale } from "@/domain/entities/locale";

export interface LocaleRepository {
  getPreferred: () => Locale | null;
}
