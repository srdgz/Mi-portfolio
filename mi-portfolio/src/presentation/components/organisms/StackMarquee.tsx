import { getStack } from "@/container";
import { StarIcon } from "@/presentation/components/atoms/Icons";
import Marquee from "@/presentation/components/molecules/Marquee";

const stack = getStack();

const StackMarquee = () => {
  return (
    <section
      aria-label="Stack"
      className="flex flex-col gap-5 border-y border-line py-9"
    >
      <Marquee>
        {stack.main.map((tech) => (
          <li
            key={tech}
            className="flex items-center gap-8 pr-8 font-display text-[clamp(36px,6vw,80px)] leading-none font-bold tracking-tight whitespace-nowrap motion-reduce:pb-3"
          >
            {tech}
            <span className="text-warm">
              <StarIcon size={28} />
            </span>
          </li>
        ))}
      </Marquee>
      <Marquee reverse>
        {stack.secondary.map((tech) => (
          <li
            key={tech}
            className="mr-3 rounded-full border border-line px-4 py-2 font-mono text-sm whitespace-nowrap text-muted motion-reduce:mb-2.5"
          >
            {tech}
          </li>
        ))}
      </Marquee>
    </section>
  );
};

export default StackMarquee;
