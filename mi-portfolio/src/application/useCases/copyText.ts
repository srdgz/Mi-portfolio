import type { ClipboardService } from "@/application/ports/ClipboardService";

export const makeCopyText =
  (clipboardService: ClipboardService) => (text: string) =>
    clipboardService.write(text);
