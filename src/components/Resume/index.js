import React from "react";
import resume from "../../assets/resume/Resume_SD.pdf";

function Resume() {
  return (
    <span>
      <iframe src={resume} className="resume">
        Here
      </iframe>
    </span>
  );
}

export default Resume;
