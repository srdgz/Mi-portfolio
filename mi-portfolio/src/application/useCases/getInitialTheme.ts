import { DEFAULT_THEME } from "@/domain/entities/theme";
import type { Theme } from "@/domain/entities/theme";
import type { ThemeRepository } from "@/domain/repositories/ThemeRepository";

export const makeGetInitialTheme =
  (themeRepository: ThemeRepository) => (): Theme =>
    themeRepository.getPreferred() ?? DEFAULT_THEME;
