const DemoButton = ({ demoLink }) => {
  return (
    <div className="flex justify-end">
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-blue-500 text-white rounded-[50px] hover:bg-blue-600 focus:outline-none shadow-lg"
        aria-label="Abrir la demo del proyecto"
      >
        <i className="fa-solid fa-globe fa-xl"></i>
      </a>
    </div>
  );
};

export default DemoButton;
