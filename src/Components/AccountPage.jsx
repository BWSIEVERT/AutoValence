import { UserProfile } from "@clerk/clerk-react";
import Navbar from "./NavBar";

function AccountPage() {
  return (
    <>
      <Navbar />
      <div className="account_container">
        <UserProfile />
      </div>
    </>
  );
}

export default AccountPage;
