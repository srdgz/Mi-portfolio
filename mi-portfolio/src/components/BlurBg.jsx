const BlurBg = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[-1]">
      <div className="absolute top-56 left-1/3 w-40 h-40 md:w-80 md:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute top-44 left-2/4 w-40 h-40 md:w-80 md:h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-80 left-2/4 w-40 h-40 md:w-80 md:h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default BlurBg;
