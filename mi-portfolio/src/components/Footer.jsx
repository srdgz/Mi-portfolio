import react from "../assets/react.png";

const Footer = () => {
  return (
    <footer className="bg-white bottom-0 left-0 right-0">
      <hr className="border-t border-gray-300 max-w-3xl mx-auto" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between">
        <span className="text-sm text-gray-800 sm:text-center flex items-center mb-2 sm:mb-0">
          © 2023 | Web realizada con
          <img
            src={react}
            alt="React"
            className="inline-block w-5 h-5 ml-1 mr-1"
          />
          por Sandra Rodríguez
        </span>

        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <a
            href="https://linkedin.com/in/sandra-rodriguez-reyes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in text-gray-800 hover:text-blue-400 text-xl"></i>
          </a>
          <a href="mailto:rreyes.sandra@gmail.com">
            <i className="fas fa-at text-gray-800 hover:text-blue-400 text-xl"></i>
          </a>
          <a
            href="https://github.com/srdgz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-gray-800 hover:text-blue-400 text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
