import { useState } from "react";
import "../Styles/Navbar.css";
import { CgMenu, CgClose } from "react-icons/cg";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MobileNav from "./mobileNav";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav className="navigation">
          <h1 className="branding-name no-select">
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
          <div onClick={toggleMenu} className="icon-container">
            <TransitionGroup component={null}>
              <CSSTransition
                key={isOpen ? "close" : "menu"}
                timeout={300}
                classNames="fade"
              >
                {isOpen === true ? <CgClose /> : <CgMenu />}
              </CSSTransition>
            </TransitionGroup>
          </div>
        </nav>
      </header>
      {isOpen === true ? <MobileNav /> : null}
    </>
  );
}

export default Navbar;
