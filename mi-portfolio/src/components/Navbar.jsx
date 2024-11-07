import { useState } from "react";
import { Link } from "react-router-dom";

import NavLink from "./NavLink.jsx";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="xl:px-32 px-6 py-4 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link to="/" onClick={closeMenu}>
          <img
            className="w-28 md:w-36 lg:w-48 md:block"
            src={logo}
            alt="Logo"
          />
        </Link>
        <ul className="flex-1 flex justify-end items-center me-16 gap-16 max-md:hidden">
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className="text-gray-800 hover:text-blue-500 px-3 py-2 text-sm font-medium"
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className="text-gray-800 hover:text-blue-500 px-3 py-2 text-sm font-medium"
            >
              Sobre mí
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={closeMenu}
              className="text-gray-800 hover:text-blue-500 px-3 py-2 text-sm font-medium"
            >
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="text-gray-800 hover:text-blue-500 px-3 py-2 text-sm font-medium"
            >
              Contacto
            </NavLink>
          </li>
        </ul>
        <ul className="hidden md:flex items-center space-x-4">
          <li>
            <a
              href="https://linkedin.com/in/sandra-rodriguez-reyes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-500"
              aria-label="Perfil de LinkedIn de Sandra Rodríguez"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/srdgz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-500"
              aria-label="Perfil de GitHub de Sandra Rodríguez"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          </li>
        </ul>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 hover:text-blue-500 focus:outline-none transition-transform transform duration-300"
          aria-label="Desplegar menú"
        >
          {isMenuOpen ? (
            <i className="fas fa-times fa-xl"></i>
          ) : (
            <i className="fas fa-bars fa-xl"></i>
          )}
        </button>
      </nav>
      {isMenuOpen && (
        <div>
          <nav className="absolute top-16 right-0 me-2 w-32 bg-white border border-gray-200 shadow-lg rounded-xl py-1 z-50 text-end">
            <ul className="md:hidden flex flex-col items-end justify-center h-full ">
              <li>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="block pe-4 py-2 text-md text-gray-800 hover:text-blue-500 transition-colors duration-300"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="block pe-4 py-2 text-md text-gray-800 hover:text-blue-500 transition-colors duration-300"
                >
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={closeMenu}
                  className="block pe-4 py-2 text-md text-gray-800 hover:text-blue-500 transition-colors duration-300"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block pe-4 py-2 text-md text-gray-800 hover:text-blue-500 transition-colors duration-300"
                >
                  Contacto
                </Link>
              </li>
              <li className="w-full px-2">
                <hr className="border-t border-gray-300 my-2" />
              </li>
              <li className="flex space-x-4 pe-4 py-2">
                <a
                  href="https://linkedin.com/in/sandra-rodriguez-reyes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil de LinkedIn de Sandra Rodríguez"
                  className="text-gray-800 hover:text-blue-500"
                >
                  <i className="fab fa-linkedin-in fa-xl"></i>
                </a>
                <a
                  href="https://github.com/srdgz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil de GitHub de Sandra Rodríguez"
                  className="text-gray-800 hover:text-blue-500"
                >
                  <i className="fab fa-github fa-xl"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
