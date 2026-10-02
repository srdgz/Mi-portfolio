const GlowBg = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute left-[-10vmax] top-[-15vmax] size-[55vmax] animate-drift rounded-full bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_65%)] opacity-20 motion-reduce:animate-none"></div>
      <div className="absolute bottom-[-20vmax] right-[-10vmax] size-[50vmax] animate-drift-slow rounded-full bg-[radial-gradient(circle,var(--color-warm)_0%,transparent_65%)] opacity-10 motion-reduce:animate-none"></div>
    </div>
  );
};

export default GlowBg;
