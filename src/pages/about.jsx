import React from "react";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div>
      <Fade>
        <div className="container-about">
          <p className="about-title">tech i use</p>
          <div className="content-box">
            <div className="content">
              <img src="https://img.icons8.com/ios-filled/100/ffffff/html-5--v1.png" />
              <p>HTML</p>
            </div>
            <div className="content">
              <img src="https://img.icons8.com/ios-filled/100/ffffff/javascript.png" />
              <p>JAVASCRIPT</p>
            </div>
            <div className="content">
              <img src="https://img.icons8.com/ios-glyphs/100/ffffff/react.png" />
              <p>REACT JS</p>
            </div>
            <div className="content">
              <img src="https://img.icons8.com/windows/100/ffffff/nodejs.png" />
              <p>NODE JS</p>
            </div>
            <div className="content">
              <img src="https://img.icons8.com/ios/100/ffffff/database.png" />
              <p>SQL / NoSQL</p>
            </div>
            <div className="content">
              <img src="https://img.icons8.com/ios-filled/100/ffffff/python.png" />
              <p>PYTHON</p>
            </div>
            <div className="content">
              <img src="https://img.icons8.com/ios-filled/100/ffffff/linux.png" />
              <p>LINUX</p>
            </div>
            <div className="content">
              <img src="https://img.icons8.com/ios-filled/100/ffffff/docker.png" />
              <p>DOCKER</p>
            </div>
            <div className="content">
              <img src="https://img.icons8.com/ios/100/ffffff/kubernetes.png" />
              <p>MICROK8S</p>
            </div>

            <div className="content">
              <img src="https://img.icons8.com/ios-filled/100/ffffff/git.png" />
              <p>GIT</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default About;
