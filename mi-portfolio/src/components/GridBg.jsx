import { useEffect, useRef } from "react";

const GridBg = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    let frame = 0;

    const handleMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.setProperty("--mx", `${e.clientX}px`);
        element.style.setProperty("--my", `${e.clientY}px`);
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="grid-bg pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    >
      <div className="grid-bg-lines absolute inset-0"></div>
      <div className="grid-bg-spot absolute inset-0"></div>
    </div>
  );
};

export default GridBg;
