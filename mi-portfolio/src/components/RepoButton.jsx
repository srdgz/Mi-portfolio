const RepoButton = ({ repoLink }) => {
  return (
    <div className="flex justify-end">
      <button
        className="p-2 bg-blue-400 text-white rounded-[50px] hover:bg-black focus:outline-none shadow-lg"
        onClick={() => window.open(repoLink, "_blank", "noopener noreferrer")}
      >
        <i className="fa-brands fa-github fa-xl"></i>
      </button>
    </div>
  );
};

export default RepoButton;
