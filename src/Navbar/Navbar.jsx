import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h2>My Portfolio</h2>
      </Link>

      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-home"> </i> Home
          </Link>
        </li>
        <li>
          <Link to="/projects">
            {" "}
            <i className="fas fa-project-diagram"></i> Projects
          </Link>
        </li>
        <li>
          <Link to="/resume">
            {" "}
            <i className="fas fa-file-download"></i> MyCv
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
