import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/1.home/Home";
import Services from "./pages/2.services/Services";
import About from "./pages/3.about/About";
import Contact from "./pages/4.contact/Contact";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function modeToggle() {
    setDarkMode((prevMode) => !prevMode);
    console.log("Mode toggled!");
  }

  return (
    <div>
      <Router>
        <Navbar modeToggle={modeToggle} />
        <Routes>
          <Route exact path="/" element={<Home darkMode={darkMode} />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
