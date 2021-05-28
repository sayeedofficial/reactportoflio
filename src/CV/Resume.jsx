import React from "react";
import { Button } from "@material-ui/core";
import { CloudDownload, Save } from "@material-ui/icons";
import cv from "./cv.pdf";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <Button
        className="cust-btn"
        href={cv}
        startIcon={<Save />}
        variant="contained"
        color="primary"
      >
        Save
      </Button>
      {"   "}
      <Button
        className="cust-btn"
        href={cv}
        startIcon={<CloudDownload />}
        variant="contained"
        color="secondary"
      >
        Alternative Link
      </Button>
    </div>
  );
};

export default Resume;
