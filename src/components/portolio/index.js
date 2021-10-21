import React from "react";
import parkTimePicture from "../../assets/projects/park-time.JPG";
import weeklyWeatherPicture from "../../assets/projects/weekly-weather.JPG";
import lpPulse from "../../assets/projects/LP-Pulse.JPG";

function Portfolio() {
  return (
    <section id="work" className="container-wrapper">
      <div className="container">
        <a href="https://parktime-2.herokuapp.com/">
          <img
            src={parkTimePicture}
            className="project"
            alt="Project Park Time"
          />
        </a>
      </div>
      <div className="container">
        <a href="https://derekbeckford.github.io/weather-weekly/">
          <img
            src={weeklyWeatherPicture}
            className="project2"
            alt="Project Weekly Weather"
          />
        </a>
      </div>
      <div className="container">
        <a href="https://pure-chamber-70764.herokuapp.com/">
          <img src={lpPulse} className="project2" alt="LP Pulse" />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
