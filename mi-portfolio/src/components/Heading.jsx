const Heading = ({ children, className }) => {
  return (
    <h1
      className={`text-xl md:text-2xl my-20 pb-2 text-start text-gray-800 font-semibold border-b border-blue-300 mx-auto ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
