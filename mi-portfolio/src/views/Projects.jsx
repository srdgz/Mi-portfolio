import Card from "../components/Card.jsx";
import Heading from "../components/Heading.jsx";
import useReveal from "../hooks/useReveal";

import RoomiesDesktop from "../assets/projects/RoomiesDesktop.png";
import FrescaGoDesktop from "../assets/projects/FrescaGoDesktop.png";
import CookiesDesktop from "../assets/projects/CookiesDesktop.png";
import SmartStayDesktop from "../assets/projects/SmartStayDesktop.png";
import WallifyDesktop from "../assets/projects/WallifyDesktop.png";

const Projects = () => {
  const ref = useReveal();

  return (
    <section
      id="proyectos"
      ref={ref}
      className="reveal mx-auto flex max-w-300 flex-col gap-10 px-5 pb-[clamp(64px,9vw,128px)] sm:px-8 lg:px-12"
    >
      <Heading label="03 — Proyectos">Proyectos personales.</Heading>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
        <Card
          title="FrescaGo"
          label="Web"
          description="E-commerce con una experiencia de compra en línea completa, incluidos los pagos."
          image={FrescaGoDesktop}
          tech={["React", "Tailwind CSS", "Node.js", "Firebase", "Stripe"]}
          repoLink={"https://github.com/srdgz/frescaGo"}
          demoLink={"https://frescago.vercel.app/"}
        />
        <Card
          title="SmartStay"
          label="Web"
          description="Reserva de alojamientos con pago mediante Stripe, reviews y panel de usuario para gestionar las reservas."
          image={SmartStayDesktop}
          tech={["Next.js", "Sanity", "Tailwind CSS", "Stripe"]}
          repoLink={"https://github.com/srdgz/smartstay"}
          demoLink={"https://smartstay.vercel.app/"}
        />
        <Card
          title="Wallify"
          label="Móvil"
          description="App para explorar y descargar fondos de pantalla, con filtros por formato, color y temática."
          image={WallifyDesktop}
          tech={["React Native", "TypeScript", "Expo", "Pixabay API"]}
          repoLink={"https://github.com/srdgz/wallify-app"}
        />
        <Card
          title="RoomieConnect"
          label="Web · Proyecto colaborativo"
          description="Aplicación web para gestionar las tareas y los gastos compartidos entre compañeros de piso."
          image={RoomiesDesktop}
          tech={["React", "Tailwind CSS"]}
          repoLink={"https://github.com/srdgz/RoomieConnect"}
          demoLink={"https://roomieconnect-msl6.onrender.com/"}
        />
        <Card
          title="Cookies & Cream"
          label="Web"
          description="Landing page de una pastelería ficticia con información sobre sus productos y tiendas."
          image={CookiesDesktop}
          tech={["React", "Bootstrap", "Node.js", "Express"]}
          repoLink={"https://github.com/srdgz/cookies-front"}
          demoLink="https://cookies-front-pied.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
