import React from 'react'
import "./About.css"
const About = () => {
    return (
      <div className="about-component" >
        <h1>About This App</h1>
        <p className="my-1">
          This is a app which describes my portfolio
        </p>
        <p className="bg-dark p">
          <strong>Version: </strong> 1.0.0
        </p>
      </div>
    );
}

export default About
