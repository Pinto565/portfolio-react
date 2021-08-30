import React from "react";
import Fade from "react-reveal/Fade";

function contact() {
  return (
    <div>
      <Fade>
        <div className="container-contact">
          <p className="contact-title">contact</p>

          <div className="contact-content-box">
            <div className="contact-content">
              <i className="far fa-envelope"></i>
              <p className="info">
                <a href="mailto:pintoinfant5650@outlook.com">
                  pintoinfant5650@outlook.com
                </a>
              </p>
            </div>

            <div className="contact-content">
              <i className="fas fa-phone"></i>
              <p className="info">
                <a href="tel: +918110908561">+91 81109 08561</a>
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default contact;
