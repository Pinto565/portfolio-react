import React from "react";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <div>
      <Fade>
        <div className="container">
          <div className="home-content">
            <h1>Pinto Infant</h1>
            <p>Web Developer</p>
            <div className="social-icons">
              <a href="https://github.com/Pinto565" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/pinto-infant/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:pintoinfant5650@outlook.com">
                <i className="far fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Home;
