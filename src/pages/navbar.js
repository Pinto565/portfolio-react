import react from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar(props) {
  return (
    <div>
      <div className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </div>
      {props.children}
    </div>
  );
}
