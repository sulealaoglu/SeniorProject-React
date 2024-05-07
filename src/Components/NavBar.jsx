import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Profile">Blogs</Link>
        </li>
        <li>
          <Link to="/Takvim">Calendar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
