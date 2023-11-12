const OpenButton = ({ renderLink }) => {
  return (
    <div className="flex justify-end">
      <a
        className="px-4 py-2 mt-4 me-2 bg-blue-400 text-white rounded-[50px] hover:bg-blue-500 focus:outline-none shadow-lg"
        href={renderLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  );
};

export default OpenButton;
