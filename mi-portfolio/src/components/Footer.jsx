const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-300 flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-5 text-sm text-muted sm:px-8 lg:px-12">
        <span>© 2026 · Sandra Rodríguez Reyes</span>
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
