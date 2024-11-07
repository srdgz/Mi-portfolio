import DownloadCvButton from "../components/DownloadCvButton";
import Heading from "../components/Heading";

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
      <Heading>Sobre mí</Heading>
      <p className="text-sm md:text-lg text-gray-500 mb-4 lg:mx-8">
        He dado un giro a mi carrera profesional hacia el desarrollo web,
        aprovechando habilidades clave como la atención al detalle y la
        rigurosidad, esenciales en este campo. Desde entonces, he trabajado en
        proyectos que no solo son funcionales, sino también visualmente
        atractivos y tecnológicamente avanzados, características fundamentales
        en el desarrollo de software moderno.
      </p>
      <p className="text-sm md:text-lg text-gray-500 mb-8 lg:mx-8">
        Me enfoco en seguir aprendiendo y en colaborar eficazmente en equipo,
        manteniendo siempre una actitud proactiva. Si buscas a alguien que
        aporte una perspectiva fresca y actual para tu próximo proyecto, no
        dudes en contactarme si crees que puedo ser de ayuda en tu próximo
        proyecto.
      </p>
      <Heading>Stack</Heading>
      <ul className="grid grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 justify-center items-center list-none text-sm md:text-lg text-gray-500 mb-8 lg:mx-8">
        <li className="flex items-center relative group">
          <img src={javascript} alt="JavaScript" className="h-8 md:h-10" />
          <span className="absolute hidden group-hover:block text-gray-600 bg-green-200 rounded-[50px] px-2 py-1 text-sm top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
            JavaScript
          </span>
        </li>
        <li className="flex items-center relative group">
          <img src={react} alt="React" className="h-8 md:h-10" />
          <span className="absolute hidden group-hover:block text-gray-600 bg-green-200 rounded-[50px] px-2 py-1 text-sm top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
            React
          </span>
        </li>
        <li className="flex items-center relative group">
          <img src={next} alt="NextJS" className="h-8 md:h-10" />
          <span className="absolute hidden group-hover:block text-gray-600 bg-green-200 rounded-[50px] px-2 py-1 text-sm top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
            NextJS
          </span>
        </li>
        <li className="flex items-center relative group">
          <img src={typescript} alt="TypeScript" className="h-8 md:h-10" />
          <span className="absolute hidden group-hover:block text-gray-600 bg-green-200 rounded-[50px] px-2 py-1 text-sm top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
            TypeScript
          </span>
        </li>
        <li className="flex items-center relative group">
          <img src={tailwind} alt="Tailwind CSS" className="h-8 md:h-10" />
          <span className="absolute hidden group-hover:block text-gray-600 bg-green-200 rounded-[50px] px-2 py-1 text-sm top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
            TailwindCSS
          </span>
        </li>
        <li className="flex items-center relative group">
          <img src={bootstrap} alt="Bootstrap" className="h-8 md:h-10" />
          <span className="absolute hidden group-hover:block text-gray-600 bg-green-200 rounded-[50px] px-2 py-1 text-sm top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
            Bootstrap
          </span>
        </li>
        <li className="flex items-center relative group">
          <img src={node} alt="NodeJS" className="h-8 md:h-10" />
          <span className="absolute hidden group-hover:block text-gray-600 bg-green-200 rounded-[50px] px-2 py-1 text-sm top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
            Node.js
          </span>
        </li>
        <li className="flex items-center relative group">
          <img src={python} alt="Python" className="h-8 md:h-10" />
          <span className="absolute hidden group-hover:block text-gray-600 bg-green-200 rounded-[50px] px-2 py-1 text-sm top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
            Python
          </span>
        </li>
        <li className="flex items-center relative group">
          <img src={flask} alt="Flask" className="h-8 md:h-10" />
          <span className="absolute hidden group-hover:block text-gray-600 bg-green-200 rounded-[50px] px-2 py-1 text-sm top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
            Flask
          </span>
        </li>
        <li className="flex items-center relative group">
          <img src={postgre} alt="PostgreSQL" className="h-8 md:h-10" />
          <span className="absolute hidden group-hover:block text-gray-600 bg-green-200 rounded-[50px] px-2 py-1 text-sm top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
            PostgreSQL
          </span>
        </li>
        <li className="flex items-center relative group">
          <img src={aws} alt="AWS" className="h-8 md:h-10" />
          <span className="absolute hidden group-hover:block text-gray-600 bg-green-200 rounded-[50px] px-2 py-1 text-sm top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
            AWS
          </span>
        </li>
        <li className="flex items-center relative group">
          <img src={jest} alt="Jest" className="h-8 md:h-10" />
          <span className="absolute hidden group-hover:block text-gray-600 bg-green-200 rounded-[50px] px-2 py-1 text-sm top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
            Jest
          </span>
        </li>
      </ul>
      <Heading>Experiencia</Heading>
      <ol className="relative border-s border-blue-400 lg:mx-8">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-md font-normal leading-none text-gray-500">
            Enero - Septiembre 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-500 my-2">
            Desarrolladora Full-Stack en Bubbo
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500">
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
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-md font-normal leading-none text-gray-500">
            Septiembre - Diciembre 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-500 my-2">
            Desarrolladora Full-Stack en Clidefit
          </h3>
          <p className="text-base font-normal text-gray-500">
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
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-md font-normal leading-none text-gray-500">
            Junio - Agosto 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-500 my-2">
            Desarrolladora Full-Stack en RoomieConnect (Proyecto colaborativo)
          </h3>
          <p className="text-base font-normal text-gray-500">
            Coordiné un equipo de 3 desarrolladores para crear RoomieConnect,
            una plataforma web para gestionar tareas y gastos compartidos entre
            compañeros de piso.
            <br />
            Desarrollo del frontend utilizando React y Tailwind CSS para
            proporcionar una interfaz de usuario intuitiva y responsiva.
            <br />
            Backend desarrollado en Python con Flask y PostgreSQL, gestionando
            la arquitectura y las APIs que permitían el registro de tareas y
            pagos.
            <br />
            Integración de APIs externas como Cloudinary para el manejo de
            imágenes y PayPal para la gestión de pagos.
          </p>
        </li>
      </ol>
      <Heading>Formación</Heading>
      <ol className="relative border-s border-blue-400 lg:mx-8">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-md font-normal leading-none text-gray-500">
            Cursando
          </time>
          <h3 className="text-lg font-semibold text-gray-500 my-2">
            Ciclo superior en desarrollo de aplicaciones web (DAW)
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500">
            I.E.S. de Teis
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-md font-normal leading-none text-gray-500">
            2023
          </time>
          <h3 className="text-lg font-semibold text-gray-500 my-2">
            Full Stack Software Development
          </h3>
          <p className="text-base font-normal text-gray-500">4Geeks Academy</p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-md font-normal leading-none text-gray-500">
            2011
          </time>
          <h3 className="text-lg font-semibold text-gray-500 my-2">
            Máster en formación del profesorado en E.S.O. y Bachillerato
          </h3>
          <p className="text-base font-normal text-gray-500">
            Universidad de Extremadura
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-md font-normal leading-none text-gray-500">
            2008
          </time>
          <h3 className="text-lg font-semibold text-gray-500 my-2">
            Licenciatura en Historia, Historia Antigua y Arqueología
          </h3>
          <p className="text-base font-normal text-gray-500">
            Universidad Autónoma de Madrid
          </p>
        </li>
      </ol>
      <div className="flex justify-center mt-20 mb-20">
        <DownloadCvButton />
      </div>
    </div>
  );
};

export default About;
