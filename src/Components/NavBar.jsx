import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const hideNavbarPaths = [
    "/",
    "/register",
    "/kpso",
    "/pndo",
    "/daso",
    "/tsgo",
    "*", // Add this to hide navbar on 404 page
  ];

  return (
    <nav
      style={{
        display: hideNavbarPaths.includes(location.pathname) ? "none" : "flex",
      }}
    >
      <ul>
        <li>
          <Link to="/Profile">Profil</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
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
