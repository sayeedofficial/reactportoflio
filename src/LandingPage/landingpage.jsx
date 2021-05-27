import React from "react";
import "./landingpage.css";
import micpic from "../Images/micpic.png";
import CP from "./CP/CP";
import Detail from '../Home/Detail/Detail'
import Skills from "./skills";
const landingpage = () => {
  return (
    <div>
      <div className="lrow">
        <div className="l-leftcolumn">
          <div className="lcard">
            <h2>My Portfolio</h2>
            <br />
            <div className="fakeimg">
              <img src={micpic} alt="" srcset="" />
            </div>
            <br/>
            <h2>Mohammed Sayeed</h2>
            <br />
            <p>
              To work in an environment which encourages me to succeed and grow
              professionally where I can utilise my skills and knowledge
              appropriately to solve real world problems and deliver high
              optimal solutions in software industry .
            </p>
            <div className="profile-links">
              <a
                id="wp-link"
                href="https://api.whatsapp.com/send?phone=918660814351"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp-square"> </i>
              </a>
              <a
                id="github-link"
                href="https://github.com/sayeedofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square"> </i>
              </a>
              <a
                id="linkedin-link"
                href="https://www.linkedin.com/in/sayeedofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"> </i>
              </a>
              <Detail />
            </div>
          </div>
        </div>
        <div className="l-rightcolumn">
          <CP></CP>
          <Skills/>
        </div>
      </div>
    </div>
  );
};

export default landingpage;
