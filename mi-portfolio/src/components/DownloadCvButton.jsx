const DownloadCvButton = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1SkIeqjo8ziSEYvwdiElAI96ZOqtrkIXu/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 text-sm md:text-md text-center font-bold bg-blue-600 text-white rounded-[50px] hover:bg-blue-700 focus:outline-none shadow-md shadow-blue-200"
      aria-label="Descargar currículum vitae"
    >
      Descargar CV
      <i className="fa-solid fa-cloud-arrow-down fa-md ms-2"></i>
    </a>
  );
};

export default DownloadCvButton;
