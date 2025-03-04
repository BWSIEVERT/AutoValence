import { UserButton } from "@clerk/clerk-react";
import "../Stylesheets/HamburgerComponentStyle.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

function HamburgerComponent() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="header_container">
        <div className="inner_container">
          <div className="hamburger_icon">
            <Hamburger size={18} toggled={open} toggle={setOpen} />
          </div>

          <UserButton />
        </div>
      </header>
      {open && (
        <div className="open">
          <nav className="navigation_container">
            <ul>
              <li>
                <a href="/">Dashboard</a>
              </li>
              <li>
                <a href="/">Organization</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default HamburgerComponent;
