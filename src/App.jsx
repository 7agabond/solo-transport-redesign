import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "./App.css";
import { useLocalStorage } from "./components/useLocalStorage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/1.home/Home";
import Services from "./pages/2.services/Services";
import About from "./pages/3.about/About";
import Contact from "./pages/4.contact/Contact";
//////////

function App() {
  const { setItem, getItem } = useLocalStorage("value");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(getItem());
  }, []);

  function modeToggle() {
    setDarkMode((prevMode) => !prevMode);
    setItem(!darkMode);
  }

  return (
    <div>
      <Router>
        <Navbar modeToggle={modeToggle} darkMode={darkMode} />
        <Routes>
          <Route exact path="/" element={<Home darkMode={darkMode} />} />
          <Route
            exact
            path="/services"
            element={<Services darkMode={darkMode} />}
          />
          <Route exact path="/about" element={<About darkMode={darkMode} />} />
          <Route
            exact
            path="/contact"
            element={<Contact darkMode={darkMode} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
