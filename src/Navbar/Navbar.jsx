import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <Link to="/">
        <h2>My Portfolio</h2>
      </Link>

      <ul>
        <li>
          <Link to="/home">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>

        <li>
          <Link to="/resume">
            {" "}
            <i className="fas fa-file-download"></i> MyCv
          </Link>
        </li>
        <li>
          <Link to="/projects">
            {" "}
            <i className="fas fa-project-diagram"></i> Projects
          </Link>
        </li>
        <li>
          <Link to="/about">
            {" "}
            <i className="fas fa-user"></i> About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
