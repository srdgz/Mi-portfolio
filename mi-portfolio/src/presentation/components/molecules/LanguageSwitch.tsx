import { LOCALES } from "@/domain/entities/locale";
import useLanguage from "@/presentation/hooks/useLanguage";

const LanguageSwitch = () => {
  const { locale, setLocale, t } = useLanguage();

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
