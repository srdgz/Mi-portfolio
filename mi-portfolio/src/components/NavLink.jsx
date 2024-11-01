import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, onClick, children }) => {
  const isActive = useLocation().pathname === to;
  const hoverColorClass = isActive ? "text-blue-600" : "hover:text-blue-600";
  return (
    <Link
      to={to}
      onClick={onClick}
      className={` ${hoverColorClass} px-3 py-2 text-sm font-medium`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
