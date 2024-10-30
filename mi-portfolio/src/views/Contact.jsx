import { useState, useRef } from "react";
import Heading from "../components/Heading";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import plane from "../assets/plane.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });
  const form = useRef();

  const { name, lastName, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email enviado correctamente");
        },

        (error) => {
          console.log(error.text);
          toast.success("Error al enviar el email. Inténtalo de nuevo");
        }
      );
    setFormData({
      name: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-md md:max-w-4xl xl:max-w-7xl mx-auto mt-8 md:mt-18 p-6 mb-44">
      <Heading direction="left" className="text-end">
        Contacta conmigo
      </Heading>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 max-w-md md:max-w-none mx-auto"
        >
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2 pt-4"
                htmlFor="name"
              >
                Nombre*
              </label>
              <input
                className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none"
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2 pt-4"
                htmlFor="lastName"
              >
                Apellido*
              </label>
              <input
                className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none"
                type="text"
                name="lastName"
                placeholder="Tu apellido"
                value={lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2 pt-4"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none"
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2 pt-4"
              htmlFor="message"
            >
              Mensaje*
            </label>
            <textarea
              className="w-full h-24 px-3 py-2 text-gray-700 border rounded-md focus:outline-none"
              name="message"
              placeholder="Escribe tu mensaje"
              value={message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-start">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-bold rounded-[50px] hover:bg-blue-700 focus:outline-none shadow-md shadow-blue-200"
              aria-label="Enviar formulario de contacto"
            >
              Enviar
            </button>
          </div>
        </form>
        <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-4 mt-8 md:mt-0">
          <img className="w-3/4" src={plane} alt="Avión de papel" />
          <p className="text-gray-700 text-lg lg:text-xl">
            O envíame un email a:{" "}
            <a
              href="mailto:rreyes.sandra@gmail.com"
              className="text-blue-600 font-semibold"
            >
              rreyes.sandra@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
