import type { Theme } from "@/domain/entities/theme";

export interface ThemeRepository {
  getPreferred: () => Theme | null;
}
