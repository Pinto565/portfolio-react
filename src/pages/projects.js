import React from "react";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <div>
      <Fade>
        <div className="container-project">
          <p className="project-title">Projects</p>
          <div className="project-content-box">
            <div className="project-content">
              <h2>01</h2>
              <p>
                A home cloud system made using raspberry pi and Nextcloud
                software to manage the storage across the home
              </p>
            </div>
            <div className="project-content">
              <h2>02</h2>
              <p>
                social distancing alert system using Arduino board , ultrasonic
                sensor and raspberry pi
              </p>
            </div>
            <div className="project-content">
              <h2>03</h2>
              <p>A portfolio website made using HTML CSS and Javascript</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Projects;
