import React from "react";
import { Link } from "react-router-dom";

function contact() {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div>
        <div>
          <div>
            <h1 className="display-5 text-center">Contact Me...!</h1>
          </div>
          <hr />
          <div className="d-flex justify-content-around text-white fs-4 mx-3">
            <p>
              Reach me on <a href="https://t.me/pinto_infant"
                className="text-white text-decoration-underline"
                target="_blank"
              >Telegram</a>{" "} or {" "}
              <a>
                <a href="mailto:pintoinfantvalan@gmail.com"
                  className="text-white text-decoration-underline"
                  target="_blank"
                >Email</a>
              </a>
            </p>
          </div>
          <hr />
          <div className="d-flex justify-content-center">
            <Link to="/">
              <p className="badge bg-white text-black fs-6">
                Home
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}

export default contact;
