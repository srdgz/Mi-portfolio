import Heading from "../components/Heading";
import useReveal from "../hooks/useReveal";

const studies = [
  {
    year: "2023",
    title: "Full-Stack Software Developer (bootcamp)",
    school: "4Geeks Academy",
  },
  {
    year: "2011",
    title: "Máster en Formación del Profesorado",
    school: "Universidad de Extremadura",
  },
  {
    year: "2008",
    title: "Licenciatura en Historia",
    school: "Universidad Autónoma de Madrid",
  },
];

const Education = () => {
  const ref = useReveal();

  return (
    <section
      id="formacion"
      ref={ref}
      className="reveal mx-auto flex max-w-300 flex-col gap-12 px-5 pb-[clamp(64px,9vw,128px)] sm:px-8 lg:px-12"
    >
      <Heading number="04" label="Formación">
        Lo que he estudiado.
      </Heading>
      <ul className="border-b border-line">
        {studies.map(({ year, title, school }) => (
          <li
            key={title}
            className="group grid grid-cols-[64px_1fr] items-baseline gap-x-6 gap-y-1 border-t border-line py-6 transition-colors hover:bg-card/60 sm:grid-cols-[110px_1fr_auto] sm:px-4"
          >
            <p className="font-mono text-sm text-accent">{year}</p>
            <h3 className="font-display text-[clamp(20px,2.4vw,28px)] font-bold leading-tight transition-colors group-hover:text-warm">
              {title}
            </h3>
            <p className="text-[15px] text-muted max-sm:col-start-2">
              {school}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
