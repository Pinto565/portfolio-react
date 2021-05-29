import React from "react";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div>
      <div className="container-about">
        <Fade>
          <p className="about-title">things i love the most</p>
        </Fade>
        <div className="content-box">
          <Fade>
            <div className="content">
              <i className="fab fa-html5"></i>
              <p>
                The HTML is the standard markup language for documents designed
                to be displayed in a web browser.
              </p>
            </div>
          </Fade>
          <Fade>
            <div className="content">
              <i className="fab fa-css3-alt"></i>
              <p>
                Cascading Style Sheets (CSS) is a style sheet language used for
                describing the presentation of a document
              </p>
            </div>
          </Fade>
          <Fade>
            <div className="content">
              <i className="fab fa-bootstrap"></i>
              <p>
                Bootstrap is a free and open-source CSS framework directed at
                responsive, mobile-first front-end web development.
              </p>
            </div>
          </Fade>
          <Fade>
            <div className="content">
              <i className="fas fa-database"></i>
              <p>
                MySQL is an open-source relational database management system
                (RDBMS). It organizes data into one or more data tables
              </p>
            </div>
          </Fade>
          <Fade>
            <div className="content">
              <i className="fab fa-python"></i>
              <p>
                Python is an interpreted high-level general-purpose programming
                language.
              </p>
            </div>
          </Fade>
          <Fade>
            <div className="content">
              <i className="fab fa-docker"></i>
              <p>
                Docker is a platform as a service (PaaS) products that use
                virtualization to deliver software in packages called containers
              </p>
            </div>
          </Fade>
          <Fade>
            <div className="content">
              <i className="fab fa-github"></i>
              <p>
                GitHub, Inc. is a provider of Internet hosting for software
                development and version control using Git.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default About;
