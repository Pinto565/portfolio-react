import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="w-50">
        <div>
          <div>
            <h1 className="display-2">Hey there...</h1>
            <p className="fs-5 fst-italic">This is Pinto Infant.
              <br />A Full Stack Developer who not only loves React and Node but also
              <br />Containerization and Virtualization.</p>
          </div>
          <hr />
          <p className="fs-1 text-center">Skills</p>
          <div className="mt-3 d-flex flex-wrap">
            <p className="badge bg-white text-black fs-6 mx-2">TypeScript</p>
            <p className="badge bg-white text-black fs-6 mx-2">JavaScript</p>
            <p className="badge bg-white text-black fs-6 mx-2">Python</p>
            <p className="badge bg-white text-black fs-6 mx-2">Node.js</p>
            <p className="badge bg-white text-black fs-6 mx-2">React</p>
            <p className="badge bg-white text-black fs-6 mx-2">HTML</p>
            <p className="badge bg-white text-black fs-6 mx-2">CSS</p>
            <p className="badge bg-white text-black fs-6 mx-2">Bash Scripting</p>
            <p className="badge bg-white text-black fs-6 mx-2">Next.js</p>
            <p className="badge bg-white text-black fs-6 mx-2">Express.js</p>
            <p className="badge bg-white text-black fs-6 mx-2">Flask</p>
            <p className="badge bg-white text-black fs-6 mx-2">Azure</p>
            <p className="badge bg-white text-black fs-6 mx-2">Github Actions</p>
            <p className="badge bg-white text-black fs-6 mx-2">Bootstrap</p>
            <p className="badge bg-white text-black fs-6 mx-2">MaterialUI</p>
            <p className="badge bg-white text-black fs-6 mx-2">MongoDB</p>
            <p className="badge bg-white text-black fs-6 mx-2">MySQL</p>
            <p className="badge bg-white text-black fs-6 mx-2">PostgreSQL</p>
            <p className="badge bg-white text-black fs-6 mx-2">CloudFlare</p>
            <p className="badge bg-white text-black fs-6 mx-2">Nginx</p>
            <p className="badge bg-white text-black fs-6 mx-2">Linux</p>
            <p className="badge bg-white text-black fs-6 mx-2">Heroku</p>
            <p className="badge bg-white text-black fs-6 mx-2">Vercel</p>
            <p className="badge bg-white text-black fs-6 mx-2">Firebase</p>
            <p className="badge bg-white text-black fs-6 mx-2">Docker</p>
            <p className="badge bg-white text-black fs-6 mx-2">Docker Swarm</p>
            <p className="badge bg-white text-black fs-6 mx-2">Portainer</p>
            <p className="badge bg-white text-black fs-6 mx-2">Rancher</p>
            <p className="badge bg-white text-black fs-6 mx-2">PiHole</p>
            <p className="badge bg-white text-black fs-6 mx-2">Kubernetes</p>
            <p className="badge bg-white text-black fs-6 mx-2">HaProxy</p>
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

export default About;
