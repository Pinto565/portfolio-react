import "../src/pages/styles/App.css"
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App bg-black text-white min-vh-100">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
