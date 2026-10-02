import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="h-screen flex items-center justify-center bg-white px-6 py-24 sm:py-24 lg:px-8">
      <div className="text-center">
        <p className="text-xl md:text-2xl font-semibold text-blue-600">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Lo siento, la página que estás buscando no existe
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/">
            <button
              type="button"
              className="rounded-full bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Volver atrás
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
