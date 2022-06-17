import React from "react";
import Typical from "react-typical";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <div>
          <h1 className="text-uppercase text-center display-1 fw-medium py-2 m-0">Hello,I'm Pinto Infant</h1>
          <p className="text-center text-capitalize fw-light fs-3 mt-2 mb-0 p-0"><span>
            <Typical
              steps={[
                "fullstack developer",
                3000,
                "cloud engineer",
                3000,
                "tech enthusiast",
                3000,
                "electronics engineer",
                3000,
                "clinomaniac",
                3000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </span>
          </p>
          <div className="d-flex justify-content-center text-white fs-2 mt-3">
            <a
              className="text-white"
              href="https://www.linkedin.com/in/pinto-infant/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in mx-2"></i>
            </a>
            <a className="text-white" href="https://github.com/Pinto565" target="_blank">
              <i className="fab fa-github mx-2"></i>
            </a>
            <a className="text-white" href="https://t.me/pinto_infant" target="_blank">
              <i class="fab fa-telegram-plane mx-2"></i>
            </a>
          </div>
          <hr />
          <div className="d-flex justify-content-center mt-4">
            <Link to="/about">
              <p className="badge bg-white text-black fs-6">About Me</p>
            </Link>
            <Link to="/projects">
              <p className="badge bg-white text-black fs-6 mx-4">Projects</p>
            </Link>
            <Link to="/contact">
              <p className="badge bg-white text-black fs-6">Contact</p>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
