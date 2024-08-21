import Card from "../components/Card.jsx";

import RoomiesDesktop from "../assets/projects/RoomiesDesktop.png";
import RoomiesMobile from "../assets/projects/RoomiesMobile.png";
import FrescaGoDesktop from "../assets/projects/FrescaGoDesktop.png";
import FrescaGoMobile from "../assets/projects/FrescaGoMobile.png";
import WeatherDesktop from "../assets/projects/WeatherDesktop.png";
import WeatherMobile from "../assets/projects/WeatherMobile.png";
import CookiesDesktop from "../assets/projects/CookiesDesktop.png";
import CookiesMobile from "../assets/projects/CookiesMobile.png";
import SmartStayDesktop from "../assets/projects/SmartStayDesktop.png";
import SmartStayMobile from "../assets/projects/SmartStayMobile.png";
import WallifyDesktop from "../assets/projects/WallifyDesktop.png";
import WallifyMobile from "../assets/projects/WallifyMobile.png";

const Projects = () => {
  const weatherTodayImages = [WeatherDesktop, WeatherMobile];
  const roomieConnectImages = [RoomiesDesktop, RoomiesMobile];
  const smartStayImages = [SmartStayDesktop, SmartStayMobile];
  const cookiesImages = [CookiesDesktop, CookiesMobile];
  const wallifyImages = [WallifyDesktop, WallifyMobile];
  const frescagoImages = [FrescaGoDesktop, FrescaGoMobile];

  return (
    <div className="max-w-md md:max-w-4xl mx-auto mt-8 md:mt-18 p-6">
      <h2 className="text-xl md:text-2xl mb-6 pb-2 text-start text-gray-800 font-semibold border-b border-blue-300 max-w-4xl mx-auto">
        Mis últimos proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-32">
        <Card
          title="RoomieConnect"
          description="Aplicación web para gestionar las tareas y gastos compartidos con tus compañeros de piso."
          images={roomieConnectImages}
          tech={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "PostgreSQL",
            "Python",
            "Flask",
          ]}
          repoLink={"https://github.com/srdgz/RoomieConnect"}
          renderLink={"https://roomieconnect-ixr3.onrender.com/"}
        />
        <Card
          title="FrescaGo"
          description="FrescaGo es un e-commerce moderno que ofrece una experiencia de compra en línea completa y fluida."
          images={frescagoImages}
          tech={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "NodeJS",
            "Express",
            "Firebase",
            "Stripe",
          ]}
          repoLink={"https://github.com/srdgz/frescaGo"}
          renderLink={"https://frescago.vercel.app/"}
        />
        <Card
          title="Wallify"
          description="Aplicación móvil diseñada para explorar y descargar fondos de pantalla de alta calidad. Los usuarios pueden buscar filtrando las imágenes."
          images={wallifyImages}
          tech={["React Native", "TypeScript", "Expo", "Pixabay API"]}
          repoLink={"https://github.com/srdgz/wallify-app"}
          renderLink={"https://github.com/srdgz/wallify-app"}
        />
        <Card
          title="SmartStay"
          description="Reserva de habitaciones de hotel usando Stripe como método de pago. Añade reviews, gestiona y controla tus reservas desde tu panel de usuario."
          images={smartStayImages}
          tech={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "NextJS",
            "Tailwind CSS",
            "SanityIO",
            "Stripe",
          ]}
          repoLink={"https://github.com/srdgz/smartstay"}
          renderLink={"https://smartstay.vercel.app/"}
        />
        <Card
          title="Cookies & Cream"
          description="Landing page de una pastelería ficticia con información sobre sus productos, y tiendas."
          images={cookiesImages}
          tech={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Bootstrap",
            "NodeJS",
            "Express",
            "Prisma",
            "PostgreSQL",
          ]}
          repoLink={"https://github.com/srdgz/cookies-front"}
          renderLink="https://cookies-front-pied.vercel.app/"
        />
        <Card
          title="WeatherToday"
          description="Consulta el pronóstico del tiempo de cualquier lugar del mundo gracias a WeatherAPI."
          images={weatherTodayImages}
          tech={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Bootstrap",
            "WeatherAPI",
          ]}
          repoLink={"https://github.com/srdgz/React-WeatherToday"}
          renderLink="https://weather-today-steel.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
