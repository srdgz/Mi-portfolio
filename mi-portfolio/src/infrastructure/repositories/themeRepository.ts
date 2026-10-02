import type { ThemeRepository } from "@/domain/repositories/ThemeRepository";

export const themeRepository: ThemeRepository = {
  getPreferred: () => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return null;
  },
};
