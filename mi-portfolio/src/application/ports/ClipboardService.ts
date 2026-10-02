export interface ClipboardService {
  write: (text: string) => Promise<void>;
}
