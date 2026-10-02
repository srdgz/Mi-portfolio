const Corners = () => {
  return (
    <span className="pointer-events-none absolute -inset-px" aria-hidden="true">
      <span className="absolute top-0 left-0 size-3 border-t-2 border-l-2 border-warm"></span>
      <span className="absolute top-0 right-0 size-3 border-t-2 border-r-2 border-warm"></span>
      <span className="absolute bottom-0 left-0 size-3 border-b-2 border-l-2 border-warm"></span>
      <span className="absolute right-0 bottom-0 size-3 border-r-2 border-b-2 border-warm"></span>
    </span>
  );
};

export default Corners;
