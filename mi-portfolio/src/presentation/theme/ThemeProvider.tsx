import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { getInitialTheme } from "@/container";
import type { Theme } from "@/domain/entities/theme";
import { ThemeContext } from "@/presentation/theme/ThemeContext";

const THEME_COLORS: Record<Theme, string> = {
  dark: "#0d0f14",
  light: "#f3f5f8",
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLORS[theme]);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
