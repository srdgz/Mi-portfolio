import { getProfile } from "@/container";
import Corners from "@/presentation/components/atoms/Corners";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/presentation/components/atoms/Icons";
import useLanguage from "@/presentation/hooks/useLanguage";
import useReveal from "@/presentation/hooks/useReveal";
import useTilt from "@/presentation/hooks/useTilt";

const Hero = () => {
  const revealRef = useReveal();
  const tiltRef = useTilt(7);
  const { locale, t } = useLanguage();
  const profile = getProfile(locale);

  return (
    <section
      id="inicio"
      ref={revealRef}
      className="reveal mx-auto grid max-w-300 items-center gap-x-10 gap-y-14 px-5 py-[clamp(48px,8vw,112px)] sm:px-8 lg:grid-cols-12 lg:px-12"
    >
      <div className="flex flex-col gap-7 lg:col-span-7">
        <p className="font-mono text-xs tracking-[0.08em] text-accent uppercase sm:text-sm">
          <span className="text-muted">{"//"}</span> {t.hero.kicker}
        </p>
        <h1 className="font-display text-[clamp(40px,11.5vw,76px)] leading-[0.95] font-bold tracking-tighter lg:text-[clamp(60px,7vw,100px)]">
          {t.hero.titleStart}{" "}
          <span className="relative inline-block text-warm">
            {t.hero.titleHighlight}
            <svg
              className="absolute bottom-[-0.14em] left-0 h-[0.16em] w-full animate-draw overflow-visible motion-reduce:animate-none"
              viewBox="0 0 300 12"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 8 C 45 2, 85 11, 130 6 S 215 3, 298 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </span>
          .
        </h1>
        <p className="max-w-135 text-lg leading-[1.55] text-muted sm:text-xl">
          {t.hero.intro}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6.5 py-3.75 font-semibold text-on-accent hover:brightness-110"
          >
            {t.hero.contact}
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRightIcon />
            </span>
          </a>
          <a
            href="#experiencia"
            className="inline-flex items-center rounded-full border border-line px-6.5 py-3.5 font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            {t.hero.experience}
          </a>
          <div className="flex gap-1">
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-12 items-center justify-center hover:text-accent"
              aria-label={t.hero.linkedin}
            >
              <LinkedinIcon size={22} />
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-12 items-center justify-center hover:text-accent"
              aria-label={t.hero.github}
            >
              <GithubIcon size={22} />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-105 lg:col-span-5">
        <div
          ref={tiltRef}
          className="relative transition-transform duration-200 ease-out"
        >
          <div
            className="absolute inset-0 translate-x-3 translate-y-3 border border-accent/40"
            aria-hidden="true"
          ></div>
          <img
            className="relative aspect-4/5 w-full object-cover object-[center_15%]"
            src={profile.photo}
            alt={t.hero.photoAlt}
            width="1086"
            height="1448"
          />
          <Corners />
          <p
            className="absolute top-3 left-3 font-mono text-xs text-on-accent/70"
            aria-hidden="true"
          >
            fig. 01
          </p>
          <p
            className="absolute top-4 -right-2 border border-line bg-card px-3 py-2 font-mono text-xs text-muted shadow-xl shadow-black/40 max-sm:hidden"
            aria-hidden="true"
          >
            <span className="text-accent">{"<App"}</span> targets=
            <span className="text-warm">{'"iOS · Android · Web"'}</span>{" "}
            <span className="text-accent">{"/>"}</span>
          </p>
          <p className="absolute bottom-6 -left-2 flex items-center gap-3 border border-line bg-card px-4 py-3 text-sm shadow-xl shadow-black/40 sm:-left-5">
            <span className="relative flex size-2.5" aria-hidden="true">
              <span className="absolute inset-0 animate-ping-slow rounded-full bg-warm motion-reduce:animate-none"></span>
              <span className="relative size-2.5 rounded-full bg-warm"></span>
            </span>
            <span className="font-semibold">{t.hero.availability}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
