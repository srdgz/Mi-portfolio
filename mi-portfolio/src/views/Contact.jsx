import toast from "react-hot-toast";

import Corners from "../components/Corners";
import Heading from "../components/Heading";
import useReveal from "../hooks/useReveal";
import {
  ArrowUpRightIcon,
  CopyIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "../components/Icons.jsx";

const email = "rreyes.sandra@gmail.com";

const Contact = () => {
  const ref = useReveal();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copiado");
    } catch {
      toast.error("No se ha podido copiar el email");
    }
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="reveal mx-auto max-w-300 px-5 pb-[clamp(64px,9vw,112px)] sm:px-8 lg:px-12"
    >
      <div className="relative border border-line bg-card/80 p-[clamp(24px,4vw,48px)]">
        <Corners />
        <div className="grid items-center gap-x-16 gap-y-8 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-6">
            <Heading number="05" label="Contacto">
              ¿Hablamos<span className="text-warm">?</span>
            </Heading>
            <p className="max-w-105 text-lg text-muted">
              Busco un puesto de frontend web y móvil en remoto desde España.
              Disponibilidad inmediata.
            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-3 lg:col-span-6">
            <a
              href={`mailto:${email}`}
              className="group flex items-center justify-between gap-4 rounded-full bg-accent px-6 py-3.5 font-semibold text-on-accent hover:brightness-110"
            >
              <span className="flex items-center gap-3">
                <MailIcon size={20} />
                Escríbeme un email
              </span>
              <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRightIcon />
              </span>
            </a>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-full border border-line py-0.5 pl-6 pr-1 max-sm:rounded-3xl">
              <span className="min-w-0 py-2 font-mono text-[15px] wrap-anywhere">
                {email}
              </span>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full px-4 text-[15px] font-semibold hover:text-accent"
              >
                <CopyIcon />
                Copiar
              </button>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(160px,100%),1fr))] gap-3">
              <a
                href="https://linkedin.com/in/sandra-rodriguez-reyes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                <span className="flex items-center gap-3">
                  <LinkedinIcon size={20} />
                  LinkedIn
                </span>
                <ArrowUpRightIcon />
              </a>
              <a
                href="https://github.com/srdgz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                <span className="flex items-center gap-3">
                  <GithubIcon size={20} />
                  GitHub
                </span>
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
