export interface Spec {
  term: string;
  detail: string;
}

export interface Profile {
  name: string;
  photo: string;
  email: string;
  cvUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  specs: Spec[];
}

export type ProfileInput = Omit<Profile, "specs"> &
  Partial<Pick<Profile, "specs">>;

export const createProfile = ({
  specs = [],
  ...profile
}: ProfileInput): Profile => Object.freeze({ ...profile, specs });
