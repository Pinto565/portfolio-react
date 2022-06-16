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
              <p className="fs-5 fw-light text-center my-2">Want to Reach Me... Mail me at<br /> <a href="mailto:pintoinfantvalan@gmail.com"><span className="badge bg-white text-black">pintoinfantvalan@gmail.com</span></a></p>
              <p className="fs-4 fw-bold text-center my-1">Or...</p>
              <p className="fs-5 fw-light text-center my-2">Message me on Telegram<br /><a href="https://t.me/pinto_infant"><span className="badge bg-white text-black">@pinto_infant</span></a></p>
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
