// import { useState } from "react";

const Modal = ({
  isOpen,
  onClose,
  title,
  newDescription,
  //   technologies,
  //   images,
}) => {
  if (!isOpen) return null;

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-[50px] shadow-xl relative flex flex-col w-full bg-white outline-none focus:outline-none ms-2 me-2">
          <div className="flex items-start justify-between p-5 border-b border-solid border-blue-300 rounded-t">
            <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold">
              {title}
            </h3>
            <button
              className="p-1 ml-auto border-0 text-gray-800 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="text-gray-800 hover:text-gray-500 h-6 w-6 text-3xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            {/* Aquí puedes agregar un carrousel de imágenes y otras informaciones */}
            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
              {newDescription}
            </p>
            <div className="flex flex-wrap mt-4">
              {/* {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mb-2 bg-blue-200 rounded-md px-2 py-1 text-xs"
                >
                  {tech}
                </span>
              ))} */}
            </div>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blue-300 rounded-b">
            <a
              href="https://github.com/srdgz/React-WeatherToday"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 px-6 py-3 bg-blue-400 text-white rounded-[50px] hover:bg-blue-500 focus:outline-none shadow-lg"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
