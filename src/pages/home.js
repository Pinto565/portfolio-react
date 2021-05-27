import React from "react";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="home-content">
          <Fade top>
            <h1>Pinto Infant</h1>
          </Fade>
          <Fade>
            <p>Front-end web developer</p>
          </Fade>
          <Fade bottom>
            <div className="social-icons">
              <a href="https://github.com/Pinto565">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/pinto-infant/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:pintoinfant5650@outlook.com">
                <i className="far fa-envelope"></i>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Home;
