import React from "react";
import "./landingpage.css";
import micpic from "../Images/micpic.png";
import CP from "./CP/CP";
const landingpage = () => {
  return (
    <div>
      <div className="lrow">
        <div className="l-leftcolumn">
          <div className="lcard">
            <h2>My Portfolio</h2>
            <h5>{ }</h5>
            <div className="fakeimg">
              <img src={micpic} alt="" srcset="" />
            </div>

            <h2>Mohammed Sayeed</h2>
            <p>
              To work in an environment which encourages me to succeed and grow
              professionally where i can utilise my skills and knowledge
              appropriately to solve real world problems and deliver high
              optimal solutions in software industry .
            </p>
          </div>
        </div>
        <div className="l-rightcolumn">
          <CP></CP>
        </div>
      </div>
    </div>
  );
};

export default landingpage;
