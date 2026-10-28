import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>
        <FaReact /> My First React Website
      </h1>
      <p>Built with Vite, React, and react-icons.</p>
      <div className="icons">
        <FaNodeJs size={40} />
        <FaReact size={40} />
        <FaGithub size={40} />
      </div>
    </div>
  );
}

export default App;