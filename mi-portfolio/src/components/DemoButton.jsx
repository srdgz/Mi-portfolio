const DemoButton = ({ demoLink }) => {
  return (
    <div className="flex justify-end">
      <button
        className="p-2 bg-blue-400 text-white rounded-[50px] hover:bg-gray-500 focus:outline-none shadow-lg"
        onClick={() => window.open(demoLink, "_blank", "noopener noreferrer")}
        aria-label="Abrir la demo del proyecto"
      >
        <i className="fa-solid fa-globe fa-xl"></i>
      </button>
    </div>
  );
};

export default DemoButton;
