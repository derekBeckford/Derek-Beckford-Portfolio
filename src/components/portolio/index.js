import React from "react";
import parkTimePicture from "../../assets/projects/park-time.JPG"

function Portfolio() {
  return (
    <section id="work" class="work">
      <section class="workbox">
        <div class="flex-container">
          <div class="flex-item flex-item1">
            <div class="projects">
              <h3>Park Time</h3> <img src={parkTimePicture} className="park-time" /> 
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Portfolio;
