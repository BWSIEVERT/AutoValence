import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  console.log("Viewport Width: " + viewportWidth + " pixels");

  return (
    <>
      <header>
        <nav>
          <div className="title_container">
            <h1>AutoValence</h1>
          </div>
          <div className="btn_container">
            <a className="dashboard_btn" href="/">
              Dashboard
            </a>
            <a className="organization_btn" href="/organization">
              Organization
            </a>
            <div className="profile_component">
              <UserButton />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
