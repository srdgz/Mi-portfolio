import { makeCopyText } from "@/application/useCases/copyText";
import { makeGetEducation } from "@/application/useCases/getEducation";
import { makeGetExperience } from "@/application/useCases/getExperience";
import { makeGetProfile } from "@/application/useCases/getProfile";
import { makeGetProjects } from "@/application/useCases/getProjects";
import { makeGetStack } from "@/application/useCases/getStack";
import { educationRepository } from "@/infrastructure/repositories/educationRepository";
import { experienceRepository } from "@/infrastructure/repositories/experienceRepository";
import { profileRepository } from "@/infrastructure/repositories/profileRepository";
import { projectRepository } from "@/infrastructure/repositories/projectRepository";
import { stackRepository } from "@/infrastructure/repositories/stackRepository";
import { clipboardService } from "@/infrastructure/services/clipboardService";

export const getProfile = makeGetProfile(profileRepository);
export const getStack = makeGetStack(stackRepository);
export const getExperience = makeGetExperience(experienceRepository);
export const getProjects = makeGetProjects(projectRepository);
export const getEducation = makeGetEducation(educationRepository);
export const copyText = makeCopyText(clipboardService);
