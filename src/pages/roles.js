import React from "react";
import Logo from "./logo-bulb.svg";

function roles() {
  return (
    <div>
      <div className="container-roles">
        <p className="roles-title">roles</p>
        <div className="roles-content-box">
          <div className="roles-content">
            <img src={Logo} alt="Pattarai Logo" />
            <p className="roles-post">Crew Member</p>
            <p className="roles-company">Pattarai</p>
            <p className="roles-time">2020 - Present</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default roles;
