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
            <a className="dashboard_link" href="/">
              Dashboard
            </a>
            <a className="org_link" href="/organization">
              Organization
            </a>
            <UserButton />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
