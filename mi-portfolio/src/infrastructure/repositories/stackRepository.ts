import type { StackRepository } from "@/domain/repositories/StackRepository";

const mainStack = [
  "Vue 3",
  "React",
  "React Native",
  "Node.js",
  "Python",
  "TypeScript",
];

const secondaryStack = [
  "JavaScript",
  "Astro",
  "Next.js",
  "Express",
  "Flask",
  "PostgreSQL",
  "Supabase",
  "Pinia",
  "Zustand",
  "Tailwind CSS",
  "Stripe",
  "RevenueCat",
  "AWS",
  "Firebase",
  "Vitest",
  "Jest",
  "Detox",
  "GitHub Actions",
  "Claude Code",
];

export const stackRepository: StackRepository = {
  getMain: () => mainStack,
  getSecondary: () => secondaryStack,
};
