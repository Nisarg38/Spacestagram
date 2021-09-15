import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Loading from "./components/Preloader/Loading";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Pageone from "./components/Pageone/Pageone";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div style={{ background: "#1a2238" }}>
        <Loading />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Pageone />
      </div>
    </Router>
  );
}

export default App;
