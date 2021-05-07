import React from "react";
import "./Profile.css";
import portfolio11 from "../../Images/portfolio11.jpg";
const Profile = () => {
  return (
    <div className="card">
      <h1>Profile</h1>
      <img className="my-img" src={portfolio11} alt="" />
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
