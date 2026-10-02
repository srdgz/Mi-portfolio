import { LOCALES } from "@/domain/entities/locale";
import useLanguage from "@/presentation/hooks/useLanguage";

const LanguageSwitch = ({ compact = false }: { compact?: boolean }) => {
  const { locale, setLocale, t } = useLanguage();

  if (compact) {
    const nextLocale = locale === "es" ? "en" : "es";

    return (
      <button
        type="button"
        lang={nextLocale}
        onClick={() => setLocale(nextLocale)}
        aria-label={t.language.switchTo[nextLocale]}
        className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-line font-mono text-xs text-muted uppercase transition-colors hover:border-accent hover:text-accent"
      >
        {nextLocale}
      </button>
    );
  }

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className="flex rounded-full border border-line p-0.5 font-mono text-xs"
    >
      {LOCALES.map((option) => (
        <button
          key={option}
          type="button"
          lang={option}
          onClick={() => setLocale(option)}
          aria-pressed={locale === option}
          aria-label={t.language[option]}
          className={`h-9 w-9 cursor-pointer rounded-full uppercase transition-colors ${locale === option ? "bg-accent font-medium text-on-accent" : "text-muted hover:text-ink"}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
