import { useEffect } from "react";

import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
} from "../components/Icons.jsx";

import useReveal from "../hooks/useReveal";

import front from "../assets/front.png";

const mainStack = ["React Native", "Vue 3", "React", "TypeScript"];

const stack = [
  "JavaScript",
  "Pinia",
  "Zustand",
  "Astro",
  "Tailwind CSS",
  "Stripe",
  "RevenueCat",
  "AWS Amplify",
  "Firebase",
  "Jest",
  "Detox",
  "GitHub Actions",
  "Claude Code",
];

const HomePage = () => {
  const heroRef = useReveal();

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  return (
    <main>
      <section
        id="inicio"
        ref={heroRef}
        className="reveal mx-auto flex max-w-300 flex-wrap items-center gap-12 px-5 py-[clamp(40px,7vw,96px)] sm:px-8 lg:px-12"
      >
        <div className="flex flex-[1_1_480px] flex-col gap-7">
          <p className="font-mono text-sm uppercase tracking-[0.08em] text-accent">
            Desarrolladora Frontend · Web y Mobile
          </p>
          <h1 className="font-display text-[clamp(38px,11vw,72px)] lg:text-[clamp(64px,7vw,92px)] font-bold leading-[0.98] tracking-[-0.03em]">
            Apps web y móviles que{" "}
            <span className="text-warm">llegan a producción</span>.
          </h1>
          <p className="max-w-135 text-lg leading-[1.55] text-muted sm:text-xl">
            Soy Sandra. Desarrollo frontend con React Native, Vue 3 y React,
            siempre con TypeScript. He trabajado en apps publicadas en App
            Store y Google Play, con pagos y suscripciones.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:rreyes.sandra@gmail.com"
              className="inline-flex items-center gap-2.5 rounded-full bg-accent px-6.5 py-3.75 font-semibold text-on-accent hover:brightness-110"
            >
              Contacta conmigo
              <ArrowUpRightIcon />
            </a>
            <a
              href="#experiencia"
              className="inline-flex items-center rounded-full border border-line px-6.5 py-3.5 font-semibold hover:text-accent"
            >
              Ver experiencia
            </a>
            <div className="flex gap-1">
              <a
                href="https://linkedin.com/in/sandra-rodriguez-reyes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-12 items-center justify-center hover:text-accent"
                aria-label="Perfil de LinkedIn de Sandra Rodríguez"
              >
                <LinkedinIcon size={22} />
              </a>
              <a
                href="https://github.com/srdgz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-12 items-center justify-center hover:text-accent"
                aria-label="Perfil de GitHub de Sandra Rodríguez"
              >
                <GithubIcon size={22} />
              </a>
            </div>
          </div>
          <p className="flex items-center gap-2.5 font-mono text-sm text-muted">
            <span
              className="size-2 rounded-full bg-warm"
              aria-hidden="true"
            ></span>
            Disponibilidad inmediata · España (remoto)
          </p>
        </div>
        <div className="mx-auto max-w-115 flex-[1_1_340px]">
          <div className="flex justify-center overflow-hidden rounded-[36px] bg-accent px-6 pt-10">
            <img
              className="h-auto w-full max-w-100"
              src={front}
              alt="Ilustración de Sandra trabajando con su portátil"
            />
          </div>
        </div>
      </section>
      <section aria-label="Stack" className="border-y border-line">
        <ul className="mx-auto flex max-w-300 flex-wrap gap-x-3 gap-y-2.5 px-5 py-7 font-mono text-sm sm:px-8 lg:px-12">
          {mainStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-accent px-4 py-2"
            >
              {tech}
            </li>
          ))}
          {stack.map((tech) => (
            <li key={tech} className="rounded-full border border-line px-4 py-2">
              {tech}
            </li>
          ))}
        </ul>
      </section>
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
};

export default HomePage;
