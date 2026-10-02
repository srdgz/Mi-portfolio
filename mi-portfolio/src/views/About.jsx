import Heading from "../components/Heading";
import useReveal from "../hooks/useReveal";

const About = () => {
  const ref = useReveal();

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="reveal mx-auto flex max-w-300 flex-wrap gap-x-16 gap-y-12 px-5 py-[clamp(64px,9vw,128px)] sm:px-8 lg:px-12"
    >
      <div className="flex-[1_1_380px]">
        <Heading label="01 — Sobre mí">Un cambio de rumbo en 2023.</Heading>
      </div>
      <div className="flex flex-[1_1_420px] flex-col gap-5 text-lg text-muted">
        <p>
          En 2023 di un giro a mi carrera profesional hacia el desarrollo de
          software. Desde entonces llevo casi tres años trabajando como
          desarrolladora, siempre en remoto y en equipos pequeños de producto.
        </p>
        <p>
          Mi terreno es el frontend web y móvil: apps en producción con pagos y
          suscripciones (Stripe, RevenueCat), publicación en App Store y Google
          Play, y despliegue continuo con GitHub Actions y AWS Amplify.
        </p>
        <p>
          En el último año me he apoyado en Spec-Driven Development (SDD) con
          Claude Code en todas las fases: spec técnica, implementación, testing
          y documentación.
        </p>
        <p className="text-ink">
          Busco un puesto de desarrolladora frontend web y móvil, en remoto
          desde España.
        </p>
      </div>
    </section>
  );
};

export default About;
