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
      className="reveal mx-auto flex max-w-300 flex-col gap-10 px-5 pb-[clamp(64px,9vw,128px)] sm:px-8 lg:px-12"
    >
      <Heading label="04 — Formación">Lo que he estudiado.</Heading>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6">
        {studies.map(({ year, title, school }, index) => (
          <div
            key={title}
            className="flex flex-col gap-3 rounded-3xl border border-line bg-card p-7"
          >
            <p
              className={`font-mono text-sm ${index === 0 ? "text-warm" : "text-accent"}`}
            >
              {year}
            </p>
            <h3 className="grow text-[19px] font-semibold leading-[1.3]">
              {title}
            </h3>
            <p className="text-[15px] text-muted">{school}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
