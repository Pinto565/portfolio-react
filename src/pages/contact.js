import React from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

function contact() {
  return (
    <div>
      <div className="container-contact">
        <Fade>
          <p className="contact-title">contact</p>
        </Fade>

        <div className="contact-content-box">
          <Flip right>
            <div className="contact-content">
              <i className="far fa-envelope"></i>
              <p className="info">
                <a href="mailto:pintoinfant5650@outlook.com">
                  pintoinfant5650@outlook.com
                </a>
              </p>
            </div>
          </Flip>
          <Flip right>
            <div className="contact-content">
              <i className="fas fa-phone"></i>
              <p className="info">
                <a href="tel: +918110908561">+91 81109 08561</a>
              </p>
            </div>
          </Flip>
        </div>
      </div>
    </div>
  );
}

export default contact;
