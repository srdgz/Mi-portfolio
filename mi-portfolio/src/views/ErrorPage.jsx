import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="font-display text-[clamp(34px,4.6vw,60px)] font-bold leading-[1.02] tracking-tight">
          Página no encontrada
        </h1>
        <p className="text-muted">
          Lo siento, la página que estás buscando no existe
        </p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center rounded-full bg-accent px-6.5 py-3.75 font-semibold text-on-accent hover:brightness-110"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
