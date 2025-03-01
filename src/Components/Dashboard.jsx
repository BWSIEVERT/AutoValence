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
        <h1>Welcome back, {user?.firstName}!</h1>
      </div>
    </>
  );
}

export default Dashboard;
