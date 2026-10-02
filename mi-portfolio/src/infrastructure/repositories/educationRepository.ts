import { createStudy } from "@/domain/entities/study";
import type { Study } from "@/domain/entities/study";
import type { EducationRepository } from "@/domain/repositories/EducationRepository";

const studyInputs: Study[] = [
  {
    year: "2023",
    title: "Full-Stack Software Developer (bootcamp)",
    school: "4Geeks Academy",
  },
  {
    year: "2011",
    title: "Máster en Formación del Profesorado",
    school: "Universidad de Extremadura",
  },
  {
    year: "2008",
    title: "Licenciatura en Historia",
    school: "Universidad Autónoma de Madrid",
  },
];

const studies = studyInputs.map(createStudy);

export const educationRepository: EducationRepository = {
  getAll: () => studies,
};
