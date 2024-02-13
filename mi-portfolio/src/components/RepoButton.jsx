import { Link } from "react-router-dom";

const RepoButton = ({ repoLink }) => {
  return (
    <div className="flex justify-end">
      <Link
        className="p-2 bg-blue-400 text-white rounded-[50px] hover:bg-black focus:outline-none shadow-lg"
        to={repoLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github fa-xl"></i>
      </Link>
    </div>
  );
};

export default RepoButton;
