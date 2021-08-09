import React from "react";
import codechef from "../../Images/codechef.png";
import hackerrank from "../../Images/hackerrank.png";
import leetcode from "../../Images/leetcode.png";
import "./CP.css";
const CP = () => {
  return (
    <div>
      <h2>Competitive Coding Profile</h2>
      <br />
      <div className="cp-box">
        <a
          href="https://www.codechef.com/users/sayeedofficial"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cp-comp">
            <img src={codechef} alt=" " />
            <h3>5 ✪</h3>
          </div>
        </a>
        <a
          href="https://www.hackerrank.com/sayeedofficial"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cp-comp">
            <img src={hackerrank} alt=" " />
            <h3>5 ✪</h3>
          </div>
        </a>

        <a
          href="https://leetcode.com/sayeedofficial/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cp-comp">
            <img src={leetcode} alt=" " />
            <h3>3 ✪</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CP;
