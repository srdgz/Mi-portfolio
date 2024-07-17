import { Link } from "react-router-dom";
import DownloadCvButton from "../components/DownloadCvButton";

import front from "../assets/front.png";
import codeSnap from "../assets/codeSnap.png";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row items-center justify-center">
      <div className="w-full h-screen md:w-1/2 flex items-center justify-center">
        <div className="text-center text-gray-800 p-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">¡Hola! 👋🏻 </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            ¡Bienvenid@ a mi porfolio!
          </h2>

          <p className="text-xl md:text-2xl text-gray-500 mb-1">
            Soy Sandra,{" "}
            <span className="text-xl md:text-2xl mb-2 text-blue-500">
              Full-Stack Software Developer
            </span>
          </p>
          <p className="text-lg md:text-xl text-gray-500 text-center lg:mx-32">
            Me gusta el código limpio y crear diseños simples e intuitivos, pero
            que a su vez no pasen desapercibidos.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="/contact">
              <button
                type="button"
                className="rounded-full px-4 py-2 text-sm md:text-md font-bold bg-blue-400 text-white hover:bg-blue-500 shadow-lg focus:outline-none"
              >
                ¡Contacta conmigo!
              </button>
            </Link>
            <DownloadCvButton 
              href="https://drive.google.com/file/d/1TQWLDScuQ2tiBuUQZHGzL7cDPlc58Pjc/view?usp=sharing" 
              text="Descargar CV" 
            />
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
  );
};

export default HomePage;

