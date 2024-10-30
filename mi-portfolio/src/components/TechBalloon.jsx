const TechBalloon = ({ tech }) => {
  return (
    <div className="inline-block">
      <div className="text-sm text-gray-600 bg-green-200 rounded-[50px] py-1 px-2 m-2">
        {tech}
      </div>
    </div>
  );
};

export default TechBalloon;
