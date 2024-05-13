import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      style={{
        display:
          location.pathname == "/" || location.pathname == "/register"
            ? "none"
            : "flex",
      }}
    >
      <ul>
        <li>
          <Link to="/Profile">Profil</Link>
        </li>
        <li>
          <Link to="/Takvim">Takvim</Link>
        </li>
        <li>
          <Link to="/DDVP">Günlük Yazı</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
