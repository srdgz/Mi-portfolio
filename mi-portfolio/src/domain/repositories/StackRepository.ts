export interface StackRepository {
  getMain: () => string[];
  getSecondary: () => string[];
}
