import { Link } from "react-router-dom";

import front from "../assets/front.png";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row items-center justify-center">
      <div className="w-full h-screen md:w-1/2 flex items-center justify-center">
        <div className="text-center text-gray-800 p-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">¡Hey! 👋🏻 </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            ¡Bienvenid@ a mi portfolio!
          </h2>

          <p className="text-lg md:text-xl text-gray-500 mb-1">
            Soy Sandra,{" "}
            <span className="text-lg md:text-xl mb-2 text-blue-500">
              Full-Stack Software Developer
            </span>
          </p>
          <p className="text-md md:text-lg text-gray-500 mx-16">
            Me gusta el código limpio y crear diseños simples e intuitivos, pero
            que a su vez no pasen desapercibidos.
          </p>
          <Link to="/contact">
            <button
              type="button"
              className="rounded-full px-3.5 py-2.5 mt-4 text-md font-bold bg-blue-400 text-white hover:bg-blue-500 shadow-lg focus:outline-none"
            >
              ¡Contacta conmigo!
            </button>
          </Link>
        </div>
      </div>
      <div className="w-80 h-80 md:w-1/2 flex items-center justify-center">
        <img
          className="object-cover ms-2 me-2 mb-16 bg-opacity-0 rounded-full"
          src={front}
          alt="Imagen"
        />
      </div>
    </div>
  );
};

export default HomePage;
