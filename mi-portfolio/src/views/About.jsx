import Heading from "../components/Heading";
import Corners from "../components/Corners";
import useReveal from "../hooks/useReveal";

const specs = [
  { term: "Rol", detail: "Frontend · Web y Mobile" },
  { term: "Stack", detail: "React Native, Vue 3, React + TypeScript" },
  { term: "Método", detail: "Spec-Driven Development con Claude Code" },
  { term: "Modalidad", detail: "Remoto desde España" },
  { term: "Disponibilidad", detail: "Inmediata" },
];

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
          <p className="font-display text-[clamp(22px,2.7vw,34px)] font-medium leading-tight">
            En 2023 di un giro a mi carrera profesional hacia el desarrollo de
            software. Desde entonces llevo{" "}
            <span className="text-accent">tres años</span> trabajando
            como desarrolladora, siempre en posiciones de alto impacto y en productos punteros.
          </p>
          <p className="text-lg text-muted">
            Mi terreno es el frontend web y móvil: apps en producción con
            pagos y suscripciones (Stripe, RevenueCat), publicación en App
            Store y Google Play, y despliegue continuo con GitHub Actions y
            AWS Amplify.
          </p>
          <p className="text-lg text-muted">
            En el último año me he apoyado en Spec-Driven Development (SDD)
            con Claude Code en todas las fases: spec técnica, implementación,
            testing y documentación.
          </p>
          <p className="text-lg">
            Busco aportar mi experiencia como desarrolladora frontend web y móvil en proyectos innovadores que me permitan crecer profesionalmente.
          </p>
        </div>
        <aside className="lg:col-span-5">
          <div className="relative border border-line bg-card/70 p-6 sm:p-8">
            <Corners />
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              Ficha técnica
            </p>
            <dl>
              {specs.map(({ term, detail }) => (
                <div
                  key={term}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-t border-line py-3.5"
                >
                  <dt className="font-mono text-[13px] text-accent">{term}</dt>
                  <dd className="text-right text-[15px] font-medium">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
