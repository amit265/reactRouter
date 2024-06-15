import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <>
      <Router>
        <div>
          <nav className="navbar">
            <div className="navbar-container">
          
              <ul className="navbar-menu">
                <li className="navbar-item">
                  <Link to="/" className="navbar-link">
                    Home
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/about" className="navbar-link">
                    About
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contact" className="navbar-link">
                    Contact
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/dashboard" className="navbar-link">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
