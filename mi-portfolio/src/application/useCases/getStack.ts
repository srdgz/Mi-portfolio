import type { Stack } from "@/domain/entities/stack";
import type { StackRepository } from "@/domain/repositories/StackRepository";

export const makeGetStack =
  (stackRepository: StackRepository) => (): Stack => ({
    main: stackRepository.getMain(),
    secondary: stackRepository.getSecondary(),
  });
