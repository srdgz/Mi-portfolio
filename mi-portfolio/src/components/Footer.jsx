const Footer = () => {
  return (
    <footer className="overflow-hidden border-t border-line">
      <p
        className="text-outline select-none whitespace-nowrap px-5 pt-7 text-center font-display text-[clamp(28px,6vw,84px)] font-bold leading-none tracking-tight"
        aria-hidden="true"
      >
        sandra.rodríguez
      </p>
      <div className="mx-auto flex max-w-300 flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-5 text-sm text-muted sm:px-8 lg:px-12">
        <span>© 2026 · Sandra Rodríguez</span>
        <div className="flex gap-1">
          <a
            href="https://linkedin.com/in/sandra-rodriguez-reyes"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-3 text-ink hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/srdgz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-3 text-ink hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="mailto:rreyes.sandra@gmail.com"
            className="px-2.5 py-3 text-ink hover:text-accent"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
