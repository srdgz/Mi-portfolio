import type { ReactNode } from "react";

interface HeadingProps {
  number: string;
  label: string;
  children: ReactNode;
}

const Heading = ({ number, label, children }: HeadingProps) => {
  return (
    <div className="flex flex-col gap-5">
      <p className="flex items-center gap-3 font-mono text-sm text-muted">
        <span className="text-accent">§ {number}</span>
        <span className="h-px w-10 bg-line"></span>
        {label}
      </p>
      <h2 className="font-display text-[clamp(36px,5.5vw,76px)] leading-none font-bold tracking-tight">
        {children}
      </h2>
    </div>
  );
};

export default Heading;
