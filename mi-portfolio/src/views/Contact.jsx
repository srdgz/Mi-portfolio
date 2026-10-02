import toast from "react-hot-toast";

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
      <div className="flex flex-wrap items-center gap-x-16 gap-y-10 rounded-[36px] border border-line bg-card p-[clamp(24px,5vw,64px)]">
        <div className="flex flex-[1_1_360px] flex-col gap-5">
          <p className="font-mono text-sm text-muted">05 — Contacto</p>
          <h2 className="font-display text-[clamp(40px,6vw,84px)] font-bold leading-[0.98] tracking-[-0.03em]">
            ¿Hablamos?
          </h2>
          <p className="max-w-105 text-lg text-muted">
            Busco un puesto de frontend web y móvil en remoto desde España.
            Disponibilidad inmediata.
          </p>
        </div>
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-4">
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-between gap-4 rounded-3xl bg-accent px-6 py-5 text-lg font-semibold text-on-accent hover:brightness-110"
          >
            <span className="flex items-center gap-3">
              <MailIcon size={22} />
              Escríbeme un email
            </span>
            <ArrowUpRightIcon size={22} />
          </a>
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-3xl border border-line py-2 pl-6 pr-2">
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
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(160px,100%),1fr))] gap-4">
            <a
              href="https://linkedin.com/in/sandra-rodriguez-reyes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 rounded-3xl border border-line px-6 py-4 font-semibold hover:border-accent/60 hover:text-accent"
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
              className="flex items-center justify-between gap-3 rounded-3xl border border-line px-6 py-4 font-semibold hover:border-accent/60 hover:text-accent"
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
    </section>
  );
};

export default Contact;
