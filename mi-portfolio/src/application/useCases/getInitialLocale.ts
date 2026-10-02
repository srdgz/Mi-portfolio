import { DEFAULT_LOCALE } from "@/domain/entities/locale";
import type { Locale } from "@/domain/entities/locale";
import type { LocaleRepository } from "@/domain/repositories/LocaleRepository";

export const makeGetInitialLocale =
  (localeRepository: LocaleRepository) => (): Locale =>
    localeRepository.getPreferred() ?? DEFAULT_LOCALE;
