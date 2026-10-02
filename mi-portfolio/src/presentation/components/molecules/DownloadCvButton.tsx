import { getProfile } from "@/container";
import { DownloadIcon } from "@/presentation/components/atoms/Icons";
import useLanguage from "@/presentation/hooks/useLanguage";

const DownloadCvButton = () => {
  const { locale, t } = useLanguage();
  const { cvUrl } = getProfile(locale);

  return (
    <a
      href={cvUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[15px] font-semibold text-on-accent hover:brightness-110"
      aria-label={t.cv.ariaLabel}
    >
      <DownloadIcon />
      {t.cv.label}
    </a>
  );
};

export default DownloadCvButton;
