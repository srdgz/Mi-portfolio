export interface Job {
  period: string;
  company: string;
  role: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export type JobInput = Omit<Job, "highlights" | "tech"> &
  Partial<Pick<Job, "highlights" | "tech">>;

export const createJob = ({
  highlights = [],
  tech = [],
  ...job
}: JobInput): Job => Object.freeze({ ...job, highlights, tech });
