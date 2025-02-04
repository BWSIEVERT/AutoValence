import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navigation" aria-label="Main Navigation">
        <h1 className="brand-name">AutoValence</h1>
        <button
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          onClick={toggleMenu}
        >
          <span className="sr-only">Menu</span>
          &#9776;
        </button>
        <ul id="primary-menu" className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
