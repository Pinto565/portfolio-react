import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
//import Roles from "./pages/roles";
import Contact from "./pages/contact";
import { Route, Link } from "react-router-dom";
import Navbar from "./pages/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
