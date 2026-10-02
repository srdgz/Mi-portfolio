import type { Spec } from "@/domain/entities/profile";
import Corners from "@/presentation/components/atoms/Corners";

interface SpecSheetProps {
  title: string;
  specs: Spec[];
}

const SpecSheet = ({ title, specs }: SpecSheetProps) => {
  return (
    <div className="relative border border-line bg-card/70 p-6 sm:p-8">
      <Corners />
      <p className="mb-4 font-mono text-xs tracking-widest text-muted uppercase">
        {title}
      </p>
      <dl>
        {specs.map(({ term, detail }) => (
          <div
            key={term}
            className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-t border-line py-3.5"
          >
            <dt className="font-mono text-[13px] text-accent">{term}</dt>
            <dd className="text-right text-[15px] font-medium">{detail}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default SpecSheet;
