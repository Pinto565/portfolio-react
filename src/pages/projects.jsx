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
              <p>A portfolio website made using HTML CSS and ReactJS</p>
            </div>
            <div className="project-content">
              <h2>04</h2>
              <p>TPB torrent search bot using python packages</p>
            </div>
            <div className="project-content">
              <h2>05</h2>
              <p>a dev.to bot that scrapes article from it's website and send to your telegram</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Projects;
