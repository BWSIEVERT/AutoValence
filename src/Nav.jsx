// import { useState } from "react";
import "./Navbar.css";
import { CgMenu } from "react-icons/cg";

function Navbar() {
  //   const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <header>
      <nav className="navigation">
        <h1 className="branding-name">
          <a href="/">AutoValence</a>
        </h1>
        <ul className="nav-links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/home">Services</a>
          </li>
          <li>
            <a href="/home">About</a>
          </li>
          <li>
            <a href="/home">Contact</a>
          </li>
        </ul>
        <div className="icon-container">
          <CgMenu />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
