import { useEffect } from "react";

import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

import Corners from "../components/Corners.jsx";
import Marquee from "../components/Marquee.jsx";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  StarIcon,
} from "../components/Icons.jsx";

import useReveal from "../hooks/useReveal";
import useTilt from "../hooks/useTilt";

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
  const tiltRef = useTilt(7);

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
        className="reveal mx-auto grid max-w-300 items-center gap-x-10 gap-y-14 px-5 py-[clamp(48px,8vw,112px)] sm:px-8 lg:grid-cols-12 lg:px-12"
      >
        <div className="flex flex-col gap-7 lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent sm:text-sm">
            <span className="text-muted">{"//"}</span> Desarrolladora Frontend
            · Web y Mobile
          </p>
          <h1 className="font-display text-[clamp(40px,11.5vw,76px)] font-bold leading-[0.95] tracking-tighter lg:text-[clamp(60px,7vw,100px)]">
            Apps web y móviles que llegan a{" "}
            <span className="relative inline-block text-warm">
              producción
              <svg
                className="absolute bottom-[-0.14em] left-0 h-[0.16em] w-full overflow-visible"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  className="animate-draw motion-reduce:animate-none motion-reduce:[stroke-dashoffset:0]"
                  d="M2 8 C 45 2, 85 11, 130 6 S 215 3, 298 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </span>
            .
          </h1>
          <p className="max-w-135 text-lg leading-[1.55] text-muted sm:text-xl">
            Soy Sandra. Desarrollo frontend con React Native, Vue 3 y React,
            siempre con TypeScript. He trabajado en apps publicadas en App
            Store y Google Play, con pagos y suscripciones.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:rreyes.sandra@gmail.com"
              className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6.5 py-3.75 font-semibold text-on-accent hover:brightness-110"
            >
              Contacta conmigo
              <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRightIcon />
              </span>
            </a>
            <a
              href="#experiencia"
              className="inline-flex items-center rounded-full border border-line px-6.5 py-3.5 font-semibold transition-colors hover:border-accent hover:text-accent"
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
            {/* Hueco reservado para la nueva imagen */}
            <div className="relative aspect-square bg-accent"></div>
            <Corners />
            <p
              className="absolute left-3 top-3 font-mono text-xs text-on-accent/70"
              aria-hidden="true"
            >
              fig. 01
            </p>
            <p
              className="absolute -right-2 top-8 border border-line bg-card px-3 py-2 font-mono text-xs text-muted shadow-xl shadow-black/40 max-sm:hidden"
              aria-hidden="true"
            >
              <span className="text-accent">{"<App"}</span> targets=
              <span className="text-warm">{'"iOS · Android · Web"'}</span>{" "}
              <span className="text-accent">{"/>"}</span>
            </p>
            <p className="absolute -left-2 bottom-6 flex items-center gap-3 border border-line bg-card px-4 py-3 text-sm shadow-xl shadow-black/40 sm:-left-5">
              <span className="relative flex size-2.5" aria-hidden="true">
                <span className="absolute inset-0 animate-ping-slow rounded-full bg-warm motion-reduce:animate-none"></span>
                <span className="relative size-2.5 rounded-full bg-warm"></span>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-semibold">Disponibilidad inmediata</span>
                <span className="font-mono text-xs text-muted">
                  España · remoto
                </span>
              </span>
            </p>
          </div>
        </div>
      </section>
      <section
        aria-label="Stack"
        className="flex flex-col gap-5 border-y border-line py-9"
      >
        <Marquee>
          {mainStack.map((tech) => (
            <li
              key={tech}
              className="flex items-center gap-8 whitespace-nowrap pr-8 font-display text-[clamp(36px,6vw,80px)] font-bold leading-none tracking-tight motion-reduce:pb-3"
            >
              {tech}
              <span className="text-warm">
                <StarIcon size={28} />
              </span>
            </li>
          ))}
        </Marquee>
        <Marquee reverse>
          {stack.map((tech) => (
            <li
              key={tech}
              className="mr-3 whitespace-nowrap rounded-full border border-line px-4 py-2 font-mono text-sm text-muted motion-reduce:mb-2.5"
            >
              {tech}
            </li>
          ))}
        </Marquee>
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
