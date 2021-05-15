import React from "react";
import "./Profile.css";
import micpic from "../../Images/micpic.png";
const Profile = () => {
  return (
    <div className="card">
      <h1>Profile</h1>
      <img className="my-img" src={micpic} alt="" />
      <h1>Mohammed Sayeed</h1>
      <p className="title">Full Stack Developer</p>
      <a className="profile-link" href="https://github.com/sayeedofficial">
        <i className="fab fa-github-square"> </i>
      </a>
      <a
        className="profile-link"
        href="https://www.linkedin.com/in/sayeedofficial/"
      >
        <i className="fab fa-linkedin"> </i>
      </a>
    </div>
  );
};

export default Profile;
