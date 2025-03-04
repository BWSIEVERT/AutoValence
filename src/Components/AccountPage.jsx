import { UserProfile } from "@clerk/clerk-react";
import Navbar from "./HamburgerComponent";

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
