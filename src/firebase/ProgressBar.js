import React from "react";
import "../App.css";

const ProgressBar = ({ progress }) => {
  // const { progress, url } = useStorage(file);

  // useEffect(() => {
  //   if (url) {
  //     setFile(null);
  //   }
  // }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
