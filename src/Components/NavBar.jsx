import { useState, useEffect } from "react";
import { UserButton, SignOutButton } from "@clerk/clerk-react";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              {isMobile ? <a href="/account">Account</a> : <UserButton />}
            </div>
            {isMobile ? (
              <div className="logout_btn">
                <SignOutButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#d8bff4"
                      d="M5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5zm16 7l-4-4v3H9v2h8v3z"
                    ></path>
                  </svg>
                </SignOutButton>
              </div>
            ) : null}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
