import React from "react";
import Skill from "./skill";
import "./skills.css";
const CP = () => {
  const skillsarray = [
    "C++",
    "Java",
    "Python",
    "JavaScript",
    "React",
    "Nodejs",
    "Android",
    "Flutter",
    "Git and GitHub",
  ];
  return (
    <div>
      <br />
      <h2>Technical Skills</h2>
      <br />
      <div className="skill-box">
        {skillsarray.map((e) => (
          <Skill skill={e} />
        ))}
      </div>
    </div>
  );
};

export default CP;
