import React from "react";
import parkTimePicture from "../../assets/projects/park-time.JPG";
import weeklyWeatherPicture from "../../assets/projects/weekly-weather.JPG";

function Portfolio() {
  return (
    <section id="work" className="work">
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
    </section>
  );
}

export default Portfolio;
