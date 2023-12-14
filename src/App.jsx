import {
  BrowserRouter as Router,
  Routes,
  Route,
  useFetcher,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/1.home/Home";
import Services from "./pages/2.services/Services";
import About from "./pages/3.about/About";
import Contact from "./pages/4.contact/Contact";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem("Dark_Mode_Storage");
    if (data !== null) setDarkMode(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("Dark_Mode_Storage", JSON.stringify(darkMode));
  }, [darkMode]);

  function modeToggle() {
    setDarkMode((prevMode) => !prevMode);
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
