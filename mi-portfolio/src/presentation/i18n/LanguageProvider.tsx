import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { getInitialLocale } from "@/container";
import type { Locale } from "@/domain/entities/locale";
import { LanguageContext } from "@/presentation/i18n/LanguageContext";
import { messages } from "@/presentation/i18n/messages";

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const t = messages[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
  }, [locale, t]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
