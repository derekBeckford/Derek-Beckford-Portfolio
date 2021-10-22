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
          <div class="image_overlay">
            <div class="image_title">Parktime 2.0</div>
          </div>
        </a>
      </div>
      <div className="container">
        <a href="https://derekbeckford.github.io/weather-weekly/">
          <img
            src={weeklyWeatherPicture}
            className="project"
            alt="Project Weekly Weather"
          />
          <div class="image_overlay">
            <div class="image_title">Weekly Weather</div>
          </div>
        </a>
      </div>
      <div className="container">
        <a href="https://pure-chamber-70764.herokuapp.com/">
          <img
            src={lpPulse}
            alt="LP Pulse"
            className="project"
          />
          <div class="image_overlay">
            <div class="image_title">LP Pulse</div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
