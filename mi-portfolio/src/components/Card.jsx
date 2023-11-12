import { useState } from "react";

import OpenButton from "./OpenButton.jsx";
import RepoButton from "./RepoButton.jsx";
import TechBalloon from "./TechBalloon.jsx";

const Card = ({ title, description, images, tech, repoLink, renderLink }) => {
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
    <div>
      <section
        className="max-w-sm m-2 bg-white border border-gray-200 rounded-[50px] shadow-lg"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <img
          className="rounded-lg object-cover px-4 pt-4"
          src={
            hovered && images && images.length > 1 ? images[1] : currentImage
          }
          alt={`Imagen de ${title}`}
        />
        <div className="p-5">
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
          <div className="flex justify-end">
            <RepoButton repoLink={repoLink} />
            <OpenButton renderLink={renderLink} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
