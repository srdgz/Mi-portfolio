import react from "../assets/react.png";
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
    <div className="max-w-md md:max-w-4xl mx-auto mt-8 md:mt-18 p-6">
      <h2 className="text-xl md:text-2xl mb-6 pb-2 text-start text-gray-800 font-semibold border-b border-blue-300 max-w-4xl mx-auto">
        Sobre mí
      </h2>
      <p className="text-sm md:text-lg text-gray-500 mb-4">
        El arte y la historia de mi formación académica pueden parecer muy
        alejados de la programación y las nuevas tecnologías, pero en ambos
        casos la atención al detalle y la rigurosidad no son solo valiosas sino
        necesarias para hacer un buen trabajo. Apoyada en esto y en mis ganas de
        aprender, he llegado a desarrollar proyectos no solo funcionales, sino
        visualmente atractivos y tecnológicamente modernos, aspectos que considero
        son fundamentales para el desarrollo de software de hoy en día. Sigo
        aprendiendo cada día para hacer mi trabajo lo mejor posible y no me
        conformo con hacer un buen trabajo, persigo la excelencia y soy
        proactiva.
      </p>
      <p className="text-sm md:text-lg text-gray-500 mb-8">
        Si estás buscando a alguien que aporte una perspectiva fresca y actual,
        estaré encantada de discutir cómo mi experiencia puede beneficiar a tu
        equipo. No dudes en contactarme si crees que puedo ser de ayuda en tu
        próximo proyecto.
      </p>
      <h2 className="text-xl md:text-2xl mb-6 pb-2 text-end text-gray-800 font-semibold border-b border-blue-300 max-w-4xl mx-auto">
        Stack
      </h2>
      <ul className="flex justify-end items-center list-none text-sm md:text-lg text-gray-500 mb-4 space-x-4">
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
      <h2 className="text-xl md:text-2xl mb-6 pb-2 text-start text-gray-800 font-semibold border-b border-blue-300 max-w-4xl mx-auto">
        Experiencia
      </h2>
      <ul className="list-none text-start text-sm md:text-lg text-gray-500 mb-4">
      <li className="mb-4">
      <strong>Full Stack developer en Bubbo</strong> · Enero 2024 - Actualidad
          <p>
            Desarrollo de la aplicación móvil Bubbo TV con React Native, TypeScript y Expo tanto para iOS como Android, con el fin de ofrecer una experiencia de usuario fluida y atractiva.
            <br />
            En el backend utilizamos Python y AWS, lo cual nos permite mantener y escalar la aplicación de manera eficiente.
            <br />
            También hemos implementado un sistema de integración CI/CD para optimizar los procesos de desarrollo.
            <br />
            En cuanto a las pruebas de testing, utilizamos Detox, un framework end-to-end, asegurando así la calidad y fiabilidad de la app en todo momento.
          </p>
        </li>
        <li className="mb-4">
        <strong>Full Stack developer en Clidefit</strong> · Octubre - Diciembre 2023
          <p>
            Desarrollo y mantenimiento de website utilizando tecnologías modernas como React.js y Tailwind CSS, para asegurar una experiencia de usuario fluida y atractiva.
            <br />
            Integré un servicio de envío de emails para facilitar la comunicación con los usuarios. Esto incluyó el manejo de formularios de contacto y la automatización de respuestas, mejorando la eficiencia de las comunicaciones.
            <br />
            También implementé una solución para gestionar la reserva de cita en línea, integrando un servicio externo. Esto permite a los usuarios hacer reservas directamente desde el sitio web, ofreciendo una experiencia sin complicaciones y mejorando la funcionalidad del sitio.
          </p>
        </li>
        <li className="mb-4">
        <strong>Agente de viajes en CN Travel</strong> · Enero 2018 - Junio 2023
          <p>
            Contratación de servicios para viajes en grupo de +40 personas de circuitos culturales, incluyendo traslados, entradas y reservas en general.
            <br />
            Gestión de la operativa especial CAM para adultos de +55 años para las agencias Viajes El Corte Inglés, Nautalia Viajes, Viajes Cibeles y Caminos 6.0, tanto de rutas en península como en islas.
            <br />
            Coordinación con proveedores de servicios y resolución de problemas en tiempo real.
          </p>
        </li>
      </ul>
      <h2 className="text-xl md:text-2xl mb-6 pb-2 text-end text-gray-800 font-semibold border-b border-blue-300 max-w-4xl mx-auto">
        Formación
      </h2>
      <ul className="list-none text-end text-sm md:text-lg text-gray-500 mb-4">
        <li className="mb-4">
        <strong>Full Stack Software Development</strong>
          <p>4Geeks Academy</p>
          <p>2023</p>
        </li>
        <li className="mb-4">
        <strong>Máster en formación del profesorado en E.S.O. y Bachillerato</strong>
          <p>Universidad de Extremadura</p>
          <p>2011</p>
        </li>
        <li className="mb-4">
        <strong>Licenciatura en Historia, Historia Antigua y Arqueología</strong>
          <p>Universidad Autónoma de Madrid</p>
          <p>2008</p>
        </li>
      </ul>
      <div className="flex justify-end mt-20 mb-28">
        <a
          href="https://drive.google.com/file/d/1TQWLDScuQ2tiBuUQZHGzL7cDPlc58Pjc/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-400 text-white rounded-[50px] hover:bg-blue-500 focus:outline-none shadow-lg"
        >
          Descargar CV
          <i className="fa-solid fa-cloud-arrow-down fa-md ms-2"></i>
        </a>
      </div>
    </div>
  );
};

export default About;
