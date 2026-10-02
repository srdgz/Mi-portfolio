import type { ProfileRepository } from "@/domain/repositories/ProfileRepository";

export const makeGetProfile = (profileRepository: ProfileRepository) => () =>
  profileRepository.get();
