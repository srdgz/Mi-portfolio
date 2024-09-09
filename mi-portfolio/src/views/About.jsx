import DownloadCvButton from "../components/DownloadCvButton";

import react from "../assets/react.png";
import javascript from "../assets/JavaScript.png";
import next from "../assets/next.png";
import typescript from "../assets/typescript.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import python from "../assets/python.png";
import flask from "../assets/flask.png";
import node from "../assets/node.png";
import postgre from "../assets/postgre.png";
import jest from "../assets/jest.png";
import aws from "../assets/aws.png";

const About = () => {
  return (
    <div className="max-w-md md:max-w-4xl xl:max-w-7xl mx-auto mt-8 md:mt-18 p-6">
      <h2 className="text-xl md:text-2xl mb-6 pb-2 text-start text-gray-800 font-semibold border-b border-blue-300 mx-auto">
        Sobre mí
      </h2>
      <p className="text-sm md:text-lg text-gray-500 mb-4">
        Mi formación en arte e historia puede parecer distante de la
        programación y las nuevas tecnologías, pero la atención al detalle y la
        rigurosidad son esenciales en ambos campos para realizar un buen
        trabajo. Con estas habilidades y mi pasión por aprender, decidí dar un
        giro a mi carrera profesional y adentrarme en el mundo del desarrollo
        web.
      </p>
      <p className="text-sm md:text-lg text-gray-500 mb-4">
        Desde entonces, he desarrollado proyectos que no solo son funcionales,
        sino también visualmente atractivos y tecnológicamente avanzados,
        cualidades fundamentales en el desarrollo de software moderno. Continúo
        aprendiendo cada día para mejorar mi trabajo y disfruto colaborando en
        equipo, siempre con actitud proactiva y positiva.
      </p>
      <p className="text-sm md:text-lg text-gray-500 mb-8">
        Si estás buscando a alguien que aporte una perspectiva fresca y actual,
        no dudes en contactarme si crees que puedo ser de ayuda en tu próximo
        proyecto.
      </p>
      <h2 className="text-xl md:text-2xl mb-6 pb-2 text-end text-gray-800 font-semibold border-b border-blue-300 mx-auto">
        Stack
      </h2>
      <ul className="grid grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 justify-center items-center list-none text-sm md:text-lg text-gray-500 mb-8">
        <li className="flex items-center">
          <img src={javascript} alt="JavaScript" className="h-8 md:h-10" />
        </li>
        <li className="flex items-center">
          <img src={react} alt="ReactJS" className="h-8 md:h-10" />
        </li>
        <li className="flex items-center">
          <img src={next} alt="NextJS" className="h-8 md:h-10" />
        </li>
        <li className="flex items-center">
          <img src={typescript} alt="TypeScript" className="h-8 md:h-10" />
        </li>
        <li className="flex items-center">
          <img src={tailwind} alt="Tailwind CSS" className="h-8 md:h-10" />
        </li>
        <li className="flex items-center">
          <img src={bootstrap} alt="Bootstrap" className="h-8 md:h-10" />
        </li>
        <li className="flex items-center">
          <img src={node} alt="NodeJS" className="h-8 md:h-10" />
        </li>
        <li className="flex items-center">
          <img src={python} alt="Python" className="h-8 md:h-10" />
        </li>
        <li className="flex items-center">
          <img src={flask} alt="Flask" className="h-8 md:h-10" />
        </li>
        <li className="flex items-center">
          <img src={postgre} alt="PostgreSQL" className="h-8 md:h-10" />
        </li>
        <li className="flex items-center">
          <img src={aws} alt="AWS" className="h-8 md:h-10" />
        </li>
        <li className="flex items-center">
          <img src={jest} alt="Jest" className="h-8 md:h-10" />
        </li>
      </ul>
      <h2 className="text-xl md:text-2xl mb-6 pb-2 text-start text-gray-800 font-semibold border-b border-blue-300 mx-auto">
        Experiencia
      </h2>
      <ul className="list-none text-start text-sm md:text-lg text-gray-500 mb-4">
        <li className="mb-4">
          <strong>Full-Stack Developer en Bubbo</strong> · Enero - Septiembre
          2024
          <p>
            Desarrollo de la aplicación móvil Bubbo TV con React Native,
            TypeScript y Expo tanto para iOS como Android, con el fin de ofrecer
            una experiencia de usuario fluida y atractiva.
            <br />
            En el backend utilizamos Python y AWS, lo cual nos permite mantener
            y escalar la aplicación de manera eficiente.
            <br />
            Implementación de RevenueCat para la gestión de suscripciones de la
            aplicación, facilitando la compra in-app y la gestión de las
            suscripciones.
            <br />
            También hemos implementado un sistema de integración CI/CD para
            optimizar los procesos de desarrollo.
            <br />
            En cuanto a las pruebas de testing, utilizamos Detox, un framework
            end-to-end, asegurando así la calidad y fiabilidad de la app en todo
            momento.
            <br />
            Uso colaborativo de GitHub para el control de versiones y la gestión
            del código, facilitando la colaboración en equipo y la revisión de
            código.
          </p>
        </li>
        <li className="mb-8">
          <strong>Full-Stack Developer en Clidefit</strong> · Octubre -
          Diciembre 2023
          <p>
            Desarrollo y mantenimiento de website utilizando tecnologías
            modernas como React y Tailwind CSS para crear un diseño limpio y
            moderno.
            <br />
            Integración de un servicio de envío de emails para facilitar la
            comunicación con los usuarios. Esto incluyó el manejo de formularios
            de contacto y la automatización de respuestas, mejorando la
            eficiencia de las comunicaciones.
            <br />
            También se implementó una solución para gestionar la reserva de
            citas en línea, integrando en la web el sistema de reservas que ya
            tenía la empresa en funcionamiento. Esto permite a los usuarios
            hacer reservas directamente desde el sitio web, para agilizar y
            simplificar la experiencia de usuario.
          </p>
        </li>
      </ul>
      <h2 className="text-xl md:text-2xl mb-6 pb-2 text-end text-gray-800 font-semibold border-b border-blue-300 mx-auto">
        Formación
      </h2>
      <ul className="list-none text-end text-sm md:text-lg text-gray-500 mb-8">
        <li className="mb-4">
          <strong>
            Ciclo superior en desarrollo de aplicaciones web (DAW)
          </strong>
          <p>I.E.S. de Teis</p>
          <p>Cursando</p>
        </li>
        <li className="mb-4">
          <strong>Full Stack Software Development</strong>
          <p>4Geeks Academy</p>
          <p>2023</p>
        </li>
        <li className="mb-4">
          <strong>
            Máster en formación del profesorado en E.S.O. y Bachillerato
          </strong>
          <p>Universidad de Extremadura</p>
          <p>2011</p>
        </li>
        <li className="mb-4">
          <strong>
            Licenciatura en Historia, Historia Antigua y Arqueología
          </strong>
          <p>Universidad Autónoma de Madrid</p>
          <p>2008</p>
        </li>
      </ul>
      <div className="flex justify-end mt-20 mb-20">
        <DownloadCvButton />
      </div>
    </div>
  );
};

export default About;
