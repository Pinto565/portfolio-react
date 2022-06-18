import React from "react";
import { Link } from "react-router-dom";

function contact() {
  return (
    <>
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <div className="w-50">
          <div>
            <div>
              <h1 className="display-2 text-center fw-bold">Get in Touch...!</h1>
            </div>
            <hr />
            <div className="mt-3 d-flex flex-column">
              <p className="fs-5 fw-light text-center my-2"><span className="fw-bold">Want to Reach Me...</span><br />Mail me at<br /> <a href="mailto:hello@pintoinfant.xyz"><span className="badge bg-white text-black text-wrap">hello<br />@<br />pintoinfant.xyz</span></a></p>
              <p className="fs-4 fw-bold text-center my-1">Or...</p>
              <p className="fs-5 fw-light text-center my-2">Contact me on Telegram<br /><a href="https://t.me/pinto_infant"><span className="badge bg-white text-black">@pinto_infant</span></a></p>
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
    </>
  );
}

export default contact;
