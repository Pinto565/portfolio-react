import React from "react";
import Zoom from "react-reveal/Zoom";

function Projects() {
  return (
    <div>
      <div className="container-project">
        <p className="project-title">Projects</p>
        <div className="project-content-box">
          <Zoom top>
            <div className="project-content">
              <h2>01</h2>
              <p>
                A home cloud system made using raspberry pi and Nextcloud
                software to manage the storage across the home
              </p>
            </div>
          </Zoom>
          <Zoom top>
            <div className="project-content">
              <h2>02</h2>
              <p>
                social distancing alert system using Arduino board , ultrasonic
                sensor and raspberry pi
              </p>
            </div>
          </Zoom>
          <Zoom bottom>
            <div className="project-content">
              <h2>03</h2>
              <p>A portfolio website made using HTML , CSS and Javascript</p>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default Projects;
