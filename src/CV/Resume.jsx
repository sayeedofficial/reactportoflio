import React from "react";
import "./Resume.css";
import cv from "./MyCv.pdf";
const Resume = () => {
  return (
    <div className="resume">
      <a target="_blank" href={cv}>
        <button className="custom-btn btn-1">Click Here</button>
      </a>
    </div>
  );
};

export default Resume;
