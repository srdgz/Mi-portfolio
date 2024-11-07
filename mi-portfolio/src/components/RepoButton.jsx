const RepoButton = ({ repoLink }) => {
  return (
    <div className="flex justify-end">
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-blue-500 text-white rounded-[50px] hover:bg-blue-600 focus:outline-none shadow-lg"
        aria-label="Abrir el repositorio del proyecto"
      >
        <i className="fa-brands fa-github fa-xl"></i>
      </a>
    </div>
  );
};

export default RepoButton;
