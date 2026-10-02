import { MoonIcon, SunIcon } from "@/presentation/components/atoms/Icons";
import useLanguage from "@/presentation/hooks/useLanguage";
import useTheme from "@/presentation/hooks/useTheme";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.theme.toLight : t.theme.toDark}
      className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeSwitch;
