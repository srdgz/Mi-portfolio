import ProjectShowcase from "../components/ProjectShowcase.jsx";
import Heading from "../components/Heading.jsx";
import useReveal from "../hooks/useReveal";

import RoomiesDesktop from "../assets/projects/RoomiesDesktop.png";
import RoomiesMobile from "../assets/projects/RoomiesMobile.png";
import FrescaGoDesktop from "../assets/projects/FrescaGoDesktop.png";
import FrescaGoMobile from "../assets/projects/FrescaGoMobile.png";
import CookiesDesktop from "../assets/projects/CookiesDesktop.png";
import CookiesMobile from "../assets/projects/CookiesMobile.png";
import SmartStayDesktop from "../assets/projects/SmartStayDesktop.png";
import SmartStayMobile from "../assets/projects/SmartStayMobile.png";
import WallifyDesktop from "../assets/projects/WallifyDesktop.png";
import WallifyMobile from "../assets/projects/WallifyMobile.png";

const projects = [
  {
    title: "FrescaGo",
    label: "Web",
    description:
      "E-commerce con una experiencia de compra en línea completa, incluidos los pagos.",
    desktopImage: FrescaGoDesktop,
    mobileImage: FrescaGoMobile,
    url: "frescago.vercel.app",
    tech: ["React", "Tailwind CSS", "Node.js", "Firebase", "Stripe"],
    repoLink: "https://github.com/srdgz/frescaGo",
    demoLink: "https://frescago.vercel.app/",
  },
  {
    title: "SmartStay",
    label: "Web",
    description:
      "Reserva de alojamientos con pago mediante Stripe, reviews y panel de usuario para gestionar las reservas.",
    desktopImage: SmartStayDesktop,
    mobileImage: SmartStayMobile,
    url: "smartstay.vercel.app",
    tech: ["Next.js", "Sanity", "Tailwind CSS", "Stripe"],
    repoLink: "https://github.com/srdgz/smartstay",
    demoLink: "https://smartstay.vercel.app/",
  },
  {
    title: "Wallify",
    label: "Móvil",
    description:
      "App para explorar y descargar fondos de pantalla, con filtros por formato, color y temática.",
    desktopImage: WallifyDesktop,
    mobileImage: WallifyMobile,
    url: "github.com/srdgz/wallify-app",
    tech: ["React Native", "TypeScript", "Expo", "Pixabay API"],
    repoLink: "https://github.com/srdgz/wallify-app",
  },
  {
    title: "RoomieConnect",
    label: "Web · Proyecto colaborativo",
    description:
      "Aplicación web para gestionar las tareas y los gastos compartidos entre compañeros de piso.",
    desktopImage: RoomiesDesktop,
    mobileImage: RoomiesMobile,
    url: "roomieconnect-msl6.onrender.com",
    tech: ["React", "Tailwind CSS"],
    repoLink: "https://github.com/srdgz/RoomieConnect",
    demoLink: "https://roomieconnect-msl6.onrender.com/",
  },
  {
    title: "Cookies & Cream",
    label: "Web",
    description:
      "Landing page de una pastelería ficticia con información sobre sus productos y tiendas.",
    desktopImage: CookiesDesktop,
    mobileImage: CookiesMobile,
    url: "cookies-front-pied.vercel.app",
    tech: ["React", "Bootstrap", "Node.js", "Express"],
    repoLink: "https://github.com/srdgz/cookies-front",
    demoLink: "https://cookies-front-pied.vercel.app/",
  },
];

const Projects = () => {
  const ref = useReveal();

  return (
    <section
      id="proyectos"
      className="mx-auto flex max-w-300 flex-col gap-[clamp(56px,8vw,112px)] px-5 pb-[clamp(64px,9vw,128px)] sm:px-8 lg:px-12"
    >
      <div ref={ref} className="reveal">
        <Heading number="03" label="Proyectos">
          Proyectos personales.
        </Heading>
      </div>
      {projects.map((project, index) => (
        <ProjectShowcase key={project.title} index={index + 1} {...project} />
      ))}
    </section>
  );
};

export default Projects;
