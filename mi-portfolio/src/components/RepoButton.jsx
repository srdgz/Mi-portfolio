const RepoButton = ({ repoLink }) => {
  return (
    <div className="flex justify-end">
      <a
        className="px-4 py-2 mt-4 me-2 bg-green-400 text-white rounded-[50px] hover:bg-green-500 focus:outline-none shadow-lg"
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github fa-lg"></i>
      </a>
    </div>
  );
};

export default RepoButton;
