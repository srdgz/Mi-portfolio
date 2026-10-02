import type { Profile } from "@/domain/entities/profile";

export interface ProfileRepository {
  get: () => Profile;
}
