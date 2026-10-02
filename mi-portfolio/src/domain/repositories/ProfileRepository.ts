import type { Locale } from "@/domain/entities/locale";
import type { Profile } from "@/domain/entities/profile";

export interface ProfileRepository {
  get: (locale: Locale) => Profile;
}
