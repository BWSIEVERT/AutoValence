import NavBar from "./HamburgerComponent";
import "../Stylesheets/DashboardStyles.css";

import { useUser } from "@clerk/clerk-react";
import FooterComponent from "./FooterComponent";

function Dashboard() {
  const { user } = useUser();
  console.log(user);

  return (
    <>
      <NavBar />
      <div className="dashboard_container">
        <div className="welcome_container">
          <h2>
            Welcome back to AutoValence, <span>{user?.firstName}</span>!
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
        <section className="intro">
          <h2>Key Features</h2>
          <ul className="feature-list">
            <li>
              <span className="feature-title">
                VIN Entry &amp; Data Retrieval
              </span>
              <p className="feature-description">
                Scan or enter a VIN to instantly retrieve vehicle details,
                accident history, service records, and ownership data.
              </p>
            </li>
            <li>
              <span className="feature-title">
                Market &amp; Pricing Intelligence
              </span>
              <p className="feature-description">
                Leverage real-time pricing data against local and national
                listings, and implement dynamic pricing recommendations to
                maximize competitiveness.
              </p>
            </li>
            <li>
              <span className="feature-title">
                Depreciation &amp; Reconditioning Forecast
              </span>
              <p className="feature-description">
                Project vehicle depreciation rates, estimate repair and
                reconditioning costs, and receive strategic recommendations on
                whether to retain, discount, or wholesale.
              </p>
            </li>
            <li>
              <span className="feature-title">
                Sales Probability &amp; Listing Optimization
              </span>
              <p className="feature-description">
                Generate a Sellability Score based on market demand and vehicle
                condition, optimize listings with AI-generated recommendations
                for platforms like Autotrader, CarGurus, and Facebook
                Marketplace.
              </p>
            </li>
            <li>
              <span className="feature-title">
                Unified Dashboard &amp; Real-Time Alerts
              </span>
              <p className="feature-description">
                Monitor inventory performance with dynamic dashboards, receive
                automated alerts for pricing updates or aging inventory, and
                automate repeatable research tasks.
              </p>
            </li>
          </ul>
        </section>
      </div>
      <FooterComponent />
    </>
  );
}

export default Dashboard;
