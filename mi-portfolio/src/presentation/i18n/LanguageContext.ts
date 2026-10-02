import { createContext } from "react";

import type { Locale } from "@/domain/entities/locale";
import type { Messages } from "@/presentation/i18n/messages";

export interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
