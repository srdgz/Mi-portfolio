import type { ClipboardService } from "@/application/ports/ClipboardService";

export const clipboardService: ClipboardService = {
  write: (text) => navigator.clipboard.writeText(text),
};
