import React from "react";
import "../../App.css";

const ProgressBar = ({ progress }) => {
  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
