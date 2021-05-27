import React from "react";
import "./skills.css";

function Skill({ skill }) {
  return (
    <div className="skill-comp">
      <h3>{skill}</h3>
    </div>
  );
}

export default Skill;
