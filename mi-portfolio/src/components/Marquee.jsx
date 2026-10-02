const Marquee = ({ reverse = false, children }) => {
  return (
    <div className="group flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:mask-none">
      <div
        className={`flex w-max group-hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        <ul className="flex shrink-0 items-center motion-reduce:shrink motion-reduce:flex-wrap">
          {children}
        </ul>
        <ul
          className="flex shrink-0 items-center motion-reduce:hidden"
          aria-hidden="true"
        >
          {children}
        </ul>
      </div>
    </div>
  );
};

export default Marquee;
