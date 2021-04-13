import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <h2>My Portfolio</h2>
      <ul>
        <li>
          <Link to="/home">
            <i class="fas fa-home"></i> Home
          </Link>
        </li>

        <li>
          <Link to="/resume">
            {" "}
            <i class="fas fa-file-download"></i> MyCv
          </Link>
        </li>
        <li>
          <Link to="/about">
            {" "}
            <i class="fas fa-user"></i> About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
