import React from "react";
import Detail from "./Detail/Detail";
import "./Home.css";
import Profile from "./Profile/Profile";
import Skill from "./SkillsSet/Skill";
const Home = () => {
  return (
    <div className="row">
      <div className="column">
        <Profile />
      </div>
      <div className="column">
        <Detail />
      </div>
      <div className="column">
        
      </div>
    </div>
  );
};

export default Home;
