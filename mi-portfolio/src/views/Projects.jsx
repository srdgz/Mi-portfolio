import Card from "../components/Card.jsx";

import RoomiesDesktop from "../assets/projects/RoomiesDesktop.png";
import RoomiesMobile from "../assets/projects/RoomiesMobile.png";
import WeatherDesktop from "../assets/projects/WeatherDesktop.png";
import WeatherMobile from "../assets/projects/WeatherMobile.png";
import CookiesDesktop from "../assets/projects/CookiesDesktop.png";
import CookiesMobile from "../assets/projects/CookiesMobile.png";

const Projects = () => {
  const weatherTodayImages = [WeatherDesktop, WeatherMobile];
  const roomieConnectImages = [RoomiesDesktop, RoomiesMobile];

  const cookiesImages = [CookiesDesktop, CookiesMobile];

  return (
    <div className="max-w-md md:max-w-4xl mx-auto mt-8 md:mt-18 p-6">
      <h2 className="text-xl md:text-2xl mb-6 pb-2 text-start text-gray-800 font-semibold border-b border-blue-300 max-w-4xl mx-auto">
        Mis últimos proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-32">
        <Card
          title="RoomieConnect"
          description="Gestiona las tareas y gastos con tus compañeros de piso."
          images={roomieConnectImages}
          tech={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind",
            "PostgreSQL",
            "Python",
            "Flask",
          ]}
          repoLink={"https://github.com/srdgz/RoomieConnect"}
          renderLink={"https://roomieconnect-ixr3.onrender.com/"}
        />
        <Card
          title="WeatherToday"
          description="Consulta el pronóstico del tiempo en cualquier lugar del mundo."
          images={weatherTodayImages}
          tech={["HTML", "CSS", "JavaScript", "React", "Bootstrap"]}
          repoLink={"https://github.com/srdgz/React-WeatherToday"}
          renderLink="https://weather-today-steel.vercel.app/"
        />
        <Card
          title="Cookies & Cream"
          description="Landing page de una pastelería."
          images={cookiesImages}
          tech={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Bootstrap",
            "Node",
            "Express",
            "Prisma",
            "PostgreSQL",
          ]}
          repoLink={"hhttps://github.com/srdgz/cookies-front"}
          renderLink="https://cookies-front-pied.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
