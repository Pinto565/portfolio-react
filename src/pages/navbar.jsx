import { Link } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  return (
    <div>
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
    </div>
  );
}
