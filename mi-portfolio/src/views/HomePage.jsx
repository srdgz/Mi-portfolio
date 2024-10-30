import DownloadCvButton from "../components/DownloadCvButton";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import front from "../assets/front.png";
import codeSnap from "../assets/codeSnap.png";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col h-screen md:flex-row items-center justify-center">
        <div className="w-full h-screen md:w-1/2 flex items-center justify-center xl:px-28">
          <div className="text-start text-gray-800 p-10">
            <h1 className="text-3xl md:text-5xl text-gray-800 font-bold mb-6">
              ¡Bienvenid@ a mi portfolio!
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-1">
              Soy Sandra,{" "}
              <span className="text-xl md:text-2xl mb-2 text-blue-500">
                Desarrolladora Full-Stack
              </span>
            </p>
            <p className="text-lg md:text-xl text-gray-500">
              Me gusta el código limpio y crear diseños simples e intuitivos,
              pero que a su vez no pasen desapercibidos.
            </p>
            <div className="flex space-x-6 mt-4">
              <a
                href="https://linkedin.com/in/sandra-rodriguez-reyes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-500"
                aria-label="Perfil de LinkedIn de Sandra Rodríguez"
              >
                <i className="fab fa-linkedin-in text-3xl"></i>
              </a>
              <a
                href="https://github.com/srdgz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-500"
                aria-label="Perfil de Github de Sandra Rodríguez"
              >
                <i className="fab fa-github text-3xl"></i>
              </a>
            </div>
            <div className="flex justify-start space-x-4 mt-4">
              <a
                href="mailto:rreyes.sandra@gmail.com"
                className="rounded-full px-2 lg:px-4 py-2 text-sm md:text-md text-center font-bold bg-blue-500 text-white hover:bg-blue-600 shadow-md shadow-blue-200 focus:outline-none"
                aria-label="Contactar conmigo"
              >
                ¡Contacta conmigo!
              </a>
              <DownloadCvButton />
            </div>
          </div>
        </div>
        <div className="lg:relative w-80 h-80 md:w-1/2 flex items-center justify-center">
          <img
            className="invisible lg:visible relative object-cover shadow-lg md:w-3/4 md:h-auto rounded-[20px]"
            src={codeSnap}
            alt="CodeSnap"
          />
          <img
            className="mb-16 mr-72 lg:absolute lg:w-1/4 lg:h-auto lg:-right-64 lg:-top-14 xl:-top-24 2xl:-top-48 rounded-full object-cover bg-opacity-0"
            src={front}
            alt="Imagen"
          />
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
