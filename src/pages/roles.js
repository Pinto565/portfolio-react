import React from 'react';
import Logo from './logo-bulb.svg';

function Home () {
    return (
        <div>
        <div className="container-roles">
        <p className="roles-title">roles</p>
        <div className="roles-content-box">
          <div className="roles-content">
              <img src={Logo} alt="Pattarai Logo"/>
                <p className="roles-post">
                  Front End Developer
                </p>
                <p className="roles-company">
                  Pattarai
                </p>
                <p className="roles-time">
                  2020 - Present
                </p>
              </div>
              <div className="roles-content">
                <img src={Logo} alt="Pattarai Logo"/>
                    <p className="roles-post">
                      Graphic Designer
                    </p>
                    <p className="roles-company">
                      Pattarai
                    </p>
                    <p className="roles-time">
                      2020 - Present
                    </p>
                  </div>
          </div>
        </div>
      </div>
        
    
    );
}

export default Home;