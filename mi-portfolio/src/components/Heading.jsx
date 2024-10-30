import { useRef, useEffect } from "react";
import { useIsVisible } from "../components/VisibleControl";

const Heading = ({ children, className, direction = "right" }) => {
  const headingRef = useRef();
  const isVisible = useIsVisible(headingRef);

  useEffect(() => {
    if (isVisible) {
      if (direction === "right") {
        headingRef.current.classList.add("animate-slideInFromRight");
      } else if (direction === "left") {
        headingRef.current.classList.add("animate-slideInFromLeft");
      }
    }
  }, [isVisible, direction]);

  return (
    <h1
      ref={headingRef}
      className={`text-xl md:text-2xl mb-20 pb-2 text-start text-gray-800 font-semibold border-b border-blue-300 mx-auto ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
