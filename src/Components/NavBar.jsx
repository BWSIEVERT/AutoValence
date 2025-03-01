import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className="title_container">
            <h1>AutoValence</h1>
          </div>
          <div className="btn_container">
            <a className="item1" href="/">
              Dashboard
            </a>
            <a className="item2" href="/organization">
              Organization
            </a>
            <a className="item3">
              <UserButton />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
