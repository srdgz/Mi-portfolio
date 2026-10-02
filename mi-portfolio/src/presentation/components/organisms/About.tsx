import { getProfile } from "@/container";
import Heading from "@/presentation/components/molecules/Heading";
import SpecSheet from "@/presentation/components/molecules/SpecSheet";
import useLanguage from "@/presentation/hooks/useLanguage";
import useReveal from "@/presentation/hooks/useReveal";

const About = () => {
  const ref = useReveal();
  const { locale, t } = useLanguage();
  const { specs } = getProfile(locale);

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="reveal mx-auto flex max-w-300 flex-col gap-12 px-5 py-[clamp(64px,9vw,128px)] sm:px-8 lg:px-12"
    >
      <Heading number="01" label={t.about.label}>
        {t.about.title}
      </Heading>
      <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <p className="font-display text-[clamp(22px,2.7vw,34px)] leading-tight font-medium">
            {t.about.leadStart}{" "}
            <span className="text-accent">{t.about.leadHighlight}</span>{" "}
            {t.about.leadEnd}
          </p>
          <p className="text-lg text-muted">{t.about.field}</p>
          <p className="text-lg text-muted">{t.about.method}</p>
          <p className="text-lg">{t.about.goal}</p>
        </div>
        <aside className="lg:col-span-5">
          <SpecSheet title={t.about.specSheet} specs={specs} />
        </aside>
      </div>
    </section>
  );
};

export default About;
