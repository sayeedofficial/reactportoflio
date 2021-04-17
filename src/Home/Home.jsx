import React from "react";
import Detail from "./Detail/Detail";
import "./Home.css";
import Profile from "./Profile/Profile";

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="column">
          <Profile />
        </div>
        <div className="column">
          <Detail />
        </div>
      </div>
    </div>
  );
};

export default Home;
