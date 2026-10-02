import type { ReactNode } from "react";

import { ArrowUpRightIcon } from "@/presentation/components/atoms/Icons";

interface ProjectLinkProps {
  href: string;
  primary?: boolean;
  children: ReactNode;
}

const ProjectLink = ({ href, primary = false, children }: ProjectLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/link inline-flex items-center gap-2 rounded-full px-5 py-3 text-[15px] font-semibold ${primary ? "bg-accent text-on-accent hover:brightness-110" : "border border-line hover:border-accent hover:text-accent"}`}
    >
      {children}
      <span className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
        <ArrowUpRightIcon size={16} />
      </span>
    </a>
  );
};

export default ProjectLink;
