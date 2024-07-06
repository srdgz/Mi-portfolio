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
        visualmente atractivos y tecnológicamente modernos, cosas que considero
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
        Formación
      </h2>
      <ul className="list-none text-end text-sm md:text-lg text-gray-500 mb-4">
        <li className="mb-4">
          Full Stack Software Development
          <p>4Geeks Academy</p>
          <p>2023</p>
        </li>
        <li className="mb-4">
          Máster en formación del profesorado en E.S.O. y Bachillerato
          <p>Universidad de Extremadura</p>
          <p>2011</p>
        </li>
        <li className="mb-4">
          Licenciatura en Historia, Historia Antigua y Arqueología
          <p>Universidad Autónoma de Madrid</p>
          <p>2008</p>
        </li>
      </ul>
      <h2 className="text-xl md:text-2xl mb-6 pb-2 text-start text-gray-800 font-semibold border-b border-blue-300 max-w-4xl mx-auto">
        Experiencia
      </h2>
      <ul className="list-none text-start text-sm md:text-lg text-gray-500 mb-4">
      <li className="mb-4">
          Full Stack developer en Bubbo
          <p>
            Desarrollo de la aplicación Bubbo App con React Native, TypeScript y Expo, con el fin de ofrecer una experiencia de usuario fluida y atractiva.
          <br />
            En el backend utilizamos AWS, lo cual nos permite mantener y escalar la aplicación de manera eficiente.
            <br />
            También hemos implementado un sistema de integración CI/CD para optimizar los procesos de desarrollo.
            <br />
            En cuanto a las pruebas de testing, utilizamos Detox, un framework end-to-end, asegurando así la calidad y fiabilidad de la app en todo momento.
          </p>
          <p>2024 - Actualidad</p>
        </li>
        <li className="mb-4">
          Full Stack developer en Clidefit
          <p>
            Desarrollo y mantenimiento de website utilizando las siguientes
            tecnologías:
            <br />
            <strong>Frontend:</strong> HTML, CSS, JavaScript, ReactJS y Tailwind
            CSS.
            <br />
            <strong>Extras:</strong> conexión con servicio para el envío de
            emails e integración con servicio externo de reservas online.
          </p>
          <p>2023</p>
        </li>
        <li className="mb-4">
          Agente de viajes en cntravel
          <p>
            Gestión de la operativa especial CAM para +55 años y contratación de
            servicios para viajes en grupo de circuitos culturales.
          </p>
          <p>2018/2023</p>
        </li>
        <li className="mb-4">
          Área de Postventa en BQ
          <p>
            Desempeño de diferentes roles dentro del área de postventa, desde
            soporte técnico de N1 hasta Responsable de Call Center supervisando
            a más de 40 personas, hasta Responsable de Calidad en Atención al
            Cliente.
          </p>
          <p>2013/2016</p>
        </li>
        <li className="mb-4">
          Arqueóloga para U.T.E. Santa Lucía {"(Ferrovial - Magenta - Cadagua)"}
          <p>
            Dirección de prospección arqueólogica para la instalación de 120km
            de tubería de agua en la provincia de Cáceres, documentando y
            registrando los hallazgos arqueológicos y realizando los
            correspondientes informes arqueológicos.
          </p>
          <p>2011/2013</p>
        </li>
      </ul>
      <div className="flex justify-end mt-10 mb-32">
        <a
          href="https://drive.google.com/file/d/179iGrL3t8Mf-sQVCWiKCnhc4qwEqDREG/view?usp=sharing"
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
