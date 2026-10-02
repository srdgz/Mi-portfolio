import { useEffect, useRef } from "react";

const useTilt = (maxDegrees = 6) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const canTilt =
      window.matchMedia("(hover: hover)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canTilt) return;

    let frame = 0;

    const handleMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.transform = `perspective(900px) rotateX(${(-y * maxDegrees).toFixed(2)}deg) rotateY(${(x * maxDegrees).toFixed(2)}deg)`;
      });
    };

    const handleLeave = () => {
      cancelAnimationFrame(frame);
      element.style.transform = "";
    };

    element.addEventListener("pointermove", handleMove);
    element.addEventListener("pointerleave", handleLeave);

    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointermove", handleMove);
      element.removeEventListener("pointerleave", handleLeave);
    };
  }, [maxDegrees]);

  return ref;
};

export default useTilt;
