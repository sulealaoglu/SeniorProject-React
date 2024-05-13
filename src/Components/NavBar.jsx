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
          <Link to="/Profile">Blogs</Link>
        </li>
        <li>
          <Link to="/Takvim">Calendar</Link>
        </li>
        <li>
          <Link to="/Günlük Yazı">Calendar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
