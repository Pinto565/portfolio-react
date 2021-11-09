import React from "react";
import Fade from "react-reveal/Fade";
import Typical from "react-typical";

function Home() {
  return (
    <div>
      <Fade>
        <div className="container">
          <div className="home-content">
            <h1>Pinto Infant</h1>
            <p>
              <Typical
                steps={[
                  "fullstack developer",
                  3000,
                  "electronics engineer",
                  3000,
                  "tech enthusiast",
                  3000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </p>
            <div className="social-icons">
              <a href="https://github.com/Pinto565" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/pinto-infant/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              {/* <a href="https://wa.me/918110908561?text=Hello" target="_blank">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="https://t.me/pinto_infant" target="_blank">
                <i class="fab fa-telegram-plane"></i>
              </a>
              <a href="mailto:pintoinfant5650@outlook.com">
                <i className="far fa-envelope"></i>
              </a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Home;
