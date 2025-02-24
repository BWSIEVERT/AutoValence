import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className="title_container">
            <h1>AutoValence</h1>
          </div>
          <div className="clerk_profile_btn">
            <UserButton />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
