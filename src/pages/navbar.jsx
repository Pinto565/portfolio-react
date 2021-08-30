import { Link } from "react-router-dom";
import "../App.css";
import Fade from "react-reveal/Fade";

export default function NavBar() {
  return (
    <div>
      <Fade>
        <div className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </Fade>
    </div>
  );
}
