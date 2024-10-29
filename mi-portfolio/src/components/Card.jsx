import { useState } from "react";

import RepoButton from "./RepoButton.jsx";
import TechBalloon from "./TechBalloon.jsx";
import DemoButton from "./DemoButton.jsx";

const Card = ({ title, description, images, tech, repoLink, demoLink }) => {
  const [hovered, setHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(
    images && images.length > 0 ? images[0] : null
  );

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
    setCurrentImage(images && images.length > 0 ? images[0] : null);
  };

  return (
    <section
      className="flex flex-col max-w-sm m-2 bg-white border border-gray-200 rounded-[50px] shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:border-blue-200 hover:shadow-blue-100"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <img
        className="rounded-lg object-cover px-4 pt-4"
        src={hovered && images && images.length > 1 ? images[1] : currentImage}
        alt={`Imagen de ${title}`}
      />
      <div className="flex-grow px-5">
        <h5 className="m-2 text-2xl font-semibold tracking-tight text-gray-800">
          {title}
        </h5>
        <p className="m-2 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex flex-wrap justify-start">
          {tech && Array.isArray(tech)
            ? tech.map((t, index) => <TechBalloon key={index} tech={t} />)
            : null}
        </div>
      </div>
      <div className="flex justify-end py-5 pe-5 gap-8">
        <RepoButton repoLink={repoLink} />
        <DemoButton demoLink={demoLink} />
      </div>
    </section>
  );
};

export default Card;
