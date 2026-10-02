import type { LocaleRepository } from "@/domain/repositories/LocaleRepository";

export const localeRepository: LocaleRepository = {
  getPreferred: () => {
    const language = navigator.language?.slice(0, 2).toLowerCase();
    if (!language) return null;
    return language === "es" ? "es" : "en";
  },
};
