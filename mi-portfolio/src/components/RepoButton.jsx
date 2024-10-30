const RepoButton = ({ repoLink }) => {
  return (
    <div className="flex justify-end">
      <button
        className="p-2 bg-blue-500 text-white rounded-[50px] hover:bg-blue-600 focus:outline-none shadow-lg"
        onClick={() => window.open(repoLink, "_blank", "noopener noreferrer")}
        aria-label="Abrir el repositorio del proyecto"
      >
        <i className="fa-brands fa-github fa-xl"></i>
      </button>
    </div>
  );
};

export default RepoButton;
