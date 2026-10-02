import { getProfile } from "@/container";
import { DownloadIcon } from "@/presentation/components/atoms/Icons";

const { cvUrl } = getProfile();

const DownloadCvButton = () => {
  return (
    <a
      href={cvUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[15px] font-semibold text-on-accent hover:brightness-110"
      aria-label="Descargar currículum vitae"
    >
      <DownloadIcon />
      Descargar CV
    </a>
  );
};

export default DownloadCvButton;
