import { getProfile } from "@/container";
import Heading from "@/presentation/components/molecules/Heading";
import SpecSheet from "@/presentation/components/molecules/SpecSheet";
import useReveal from "@/presentation/hooks/useReveal";

const { specs } = getProfile();

const About = () => {
  const ref = useReveal();

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="reveal mx-auto flex max-w-300 flex-col gap-12 px-5 py-[clamp(64px,9vw,128px)] sm:px-8 lg:px-12"
    >
      <Heading number="01" label="Sobre mí">
        Un cambio de rumbo en 2023.
      </Heading>
      <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <p className="font-display text-[clamp(22px,2.7vw,34px)] leading-tight font-medium">
            En 2023 di un giro a mi carrera profesional hacia el desarrollo de
            software. Desde entonces llevo{" "}
            <span className="text-accent">tres años</span> trabajando como
            desarrolladora, siempre en posiciones de alto impacto y en productos
            punteros.
          </p>
          <p className="text-lg text-muted">
            Mi terreno es el frontend web y móvil: apps en producción con pagos
            y suscripciones (Stripe, RevenueCat), publicación en App Store y
            Google Play, y despliegue continuo con GitHub Actions y AWS Amplify.
          </p>
          <p className="text-lg text-muted">
            En el último año me he apoyado en Spec-Driven Development (SDD) con
            Claude Code en todas las fases: spec técnica, implementación,
            testing y documentación.
          </p>
          <p className="text-lg">
            Busco aportar mi experiencia como desarrolladora frontend web y
            móvil en proyectos innovadores que me permitan crecer
            profesionalmente.
          </p>
        </div>
        <aside className="lg:col-span-5">
          <SpecSheet title="Ficha técnica" specs={specs} />
        </aside>
      </div>
    </section>
  );
};

export default About;
