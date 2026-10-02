import type { StackRepository } from "@/domain/repositories/StackRepository";

const mainStack = ["React Native", "Vue 3", "React", "TypeScript"];

const secondaryStack = [
  "JavaScript",
  "Pinia",
  "Zustand",
  "Astro",
  "Tailwind CSS",
  "Stripe",
  "RevenueCat",
  "AWS Amplify",
  "Firebase",
  "Jest",
  "Detox",
  "GitHub Actions",
  "Claude Code",
];

export const stackRepository: StackRepository = {
  getMain: () => mainStack,
  getSecondary: () => secondaryStack,
};
