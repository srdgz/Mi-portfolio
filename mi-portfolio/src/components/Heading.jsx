const Heading = ({ label, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-mono text-sm text-muted">{label}</p>
      <h2 className="font-display text-[clamp(34px,4.6vw,60px)] font-bold leading-[1.02] tracking-tight">
        {children}
      </h2>
    </div>
  );
};

export default Heading;
