import type { Locale } from "@/domain/entities/locale";
import type { ProfileRepository } from "@/domain/repositories/ProfileRepository";

export const makeGetProfile =
  (profileRepository: ProfileRepository) => (locale: Locale) =>
    profileRepository.get(locale);
