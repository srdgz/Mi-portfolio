import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="lg:px-24 px-6 py-4 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <img className="h-10 w-auto md:block" src={logo} alt="Logo" />
        <ul className="flex-1 flex justify-end items-center me-16 gap-16 max-md:hidden">
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-400 px-3 py-2 text-sm font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-blue-400 px-3 py-2 text-sm font-medium"
            >
              Sobre mí
            </Link>
            <Link
              to="/projects"
              className="text-gray-800 hover:text-blue-400 px-3 py-2 text-sm font-medium"
            >
              Proyectos
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-blue-400 px-3 py-2 text-sm font-medium"
            >
              Contacto
            </Link>
          </div>
        </ul>
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://linkedin.com/in/sandra-rodriguez-reyes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-400"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a
            href="https://github.com/srdgz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-400"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 hover:text-blue-400 focus:outline-none transition-transform transform duration-300"
        >
          {isMenuOpen ? (
            <i className="fas fa-times fa-lg"></i>
          ) : (
            <i className="fas fa-bars fa-lg"></i>
          )}
        </button>
      </nav>
      {isMenuOpen && (
        <div>
          <nav className="absolute top-16 right-0 me-2 w-32 bg-white border border-gray-200 shadow-lg rounded-xl py-1 z-50 text-end">
            <ul className="md:hidden flex flex-col items-end justify-center h-full ">
              <div className="menu">
                <Link
                  to="/"
                  className="block pe-4 py-2 text-sm text-gray-800 hover:text-blue-400 transition-colors duration-300"
                >
                  Inicio
                </Link>
                <Link
                  to="/about"
                  className="block pe-4 py-2 text-sm text-gray-800 hover:text-blue-400 transition-colors duration-300"
                >
                  Sobre mí
                </Link>
                <Link
                  to="/projects"
                  className="block pe-4 py-2 text-sm text-gray-800 hover:text-blue-400 transition-colors duration-300"
                >
                  Proyectos
                </Link>
                <Link
                  to="/contact"
                  className="block pe-4 py-2 text-sm text-gray-800 hover:text-blue-400 transition-colors duration-300"
                >
                  Contacto
                </Link>
                <hr className="border-t border-gray-300 my-2 me-2" />
                <a
                  href="https://linkedin.com/in/sandra-rodriguez-reyes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in text-gray-800 hover:text-blue-400 text-xl me-4 pb-1"></i>
                </a>
                <a
                  href="https://github.com/srdgz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github text-gray-800 hover:text-blue-400 text-xl me-4 pb-1"></i>
                </a>
              </div>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
