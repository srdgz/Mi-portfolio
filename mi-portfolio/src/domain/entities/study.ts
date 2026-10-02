export interface Study {
  year: string;
  title: string;
  school: string;
}

export const createStudy = (study: Study): Study => Object.freeze({ ...study });
