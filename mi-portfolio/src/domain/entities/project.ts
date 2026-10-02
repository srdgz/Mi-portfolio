export interface Project {
  title: string;
  label: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  url: string;
  tech: string[];
  repoLink: string;
  demoLink: string | null;
}

export type ProjectInput = Omit<Project, "demoLink"> & {
  demoLink?: string | null;
};

export const createProject = ({
  demoLink = null,
  ...project
}: ProjectInput): Project => Object.freeze({ ...project, demoLink });
