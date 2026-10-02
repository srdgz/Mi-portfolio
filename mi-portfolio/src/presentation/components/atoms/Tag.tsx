import type { ReactNode } from "react";

const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <li className="rounded-md border border-line px-2.5 py-1">{children}</li>
  );
};

export default Tag;
