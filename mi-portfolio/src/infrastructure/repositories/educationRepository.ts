import { LOCALES } from "@/domain/entities/locale";
import type { Locale } from "@/domain/entities/locale";
import { createStudy } from "@/domain/entities/study";
import type { Study } from "@/domain/entities/study";
import type { EducationRepository } from "@/domain/repositories/EducationRepository";

interface StudySource {
  year: string;
  school: string;
  title: Record<Locale, string>;
}

const sources: StudySource[] = [
  {
    year: "2023",
    school: "4Geeks Academy",
    title: {
      es: "Full-Stack Software Developer (bootcamp)",
      en: "Full-Stack Software Developer (bootcamp)",
    },
  },
  {
    year: "2011",
    school: "Universidad de Extremadura",
    title: {
      es: "Máster en Formación del Profesorado",
      en: "Master's Degree in Secondary Education Teacher Training",
    },
  },
  {
    year: "2008",
    school: "Universidad Autónoma de Madrid",
    title: {
      es: "Licenciatura en Historia",
      en: "Bachelor's Degree (Licenciatura) in History",
    },
  },
];

const toStudies = (locale: Locale): Study[] =>
  sources.map(({ title, ...study }) =>
    createStudy({ ...study, title: title[locale] }),
  );

const studies = Object.fromEntries(
  LOCALES.map((locale) => [locale, toStudies(locale)]),
) as Record<Locale, Study[]>;

export const educationRepository: EducationRepository = {
  getAll: (locale) => studies[locale],
};
