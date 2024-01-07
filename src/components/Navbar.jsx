import React from "react";
import { Link, useLocation } from "react-router-dom";
import Menubar from "../assets/menubar.png";
import history from "../assets/history.png";
import homelogo from "../assets/home.png";
import catalog from "../assets/catalog.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 w-full bg-blue-600 text-white p-5 flex justify-center items-center rounded-t-3xl"
      style={{ zIndex: 10 }}
    >
      <div className="flex space-x-10">
        <NavLink
          to="/"
          icon={homelogo}
          label="Home"
          currentPath={location.pathname}
        />
        <NavLink
          to="/catalog"
          icon={history}
          label="Catalog"
          currentPath={location.pathname}
        />
        <NavLink
          to="/history"
          icon={catalog}
          label="History"
          currentPath={location.pathname}
        />
        <NavLink
          to="/menu"
          icon={Menubar}
          label="Menu"
          currentPath={location.pathname}
        />
      </div>
    </div>
  );
};

const NavLink = ({ to, icon, label, currentPath }) => {
  const isActive = currentPath === to || (to === "/" && currentPath === "");

  return (
    <Link
      to={to}
      className={`hover:bg-purple-500 p-2 rounded-full relative ${
        isActive ? "active-link" : ""
      }`}
    >
      <img src={icon} alt={label} />

      {isActive && <div className="active-indicator "></div>}
    </Link>
  );
};

export default Navbar;
