import { DownloadIcon } from "./Icons.jsx";

const DownloadCvButton = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1z5lsXxu-4wA-q-d3QaZlCEsF9rnUmz1j/view?usp=sharing"
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
