import NavBar from "./NavBar";
import "../App.css";

import { useUser } from "@clerk/clerk-react";

function Dashboard() {
  const { user } = useUser();
  console.log(user);

  return (
    <>
      <NavBar />
      <div className="dashboard_container">
        <section className="decoder_container">
          <div className="welcome_container">
            <h2>
              Welcome back, <span>{user?.firstName}</span>!
            </h2>
            <div className="notif_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"
                ></path>
              </svg>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
