const DemoButton = ({ demoLink }) => {
  return (
    <div className="flex justify-end">
      <button
        className="p-2 bg-blue-500 text-white rounded-[50px] hover:bg-blue-600 focus:outline-none shadow-lg"
        onClick={() => window.open(demoLink, "_blank", "noopener noreferrer")}
        aria-label="Abrir la demo del proyecto"
      >
        <i className="fa-solid fa-globe fa-xl"></i>
      </button>
    </div>
  );
};

export default DemoButton;
