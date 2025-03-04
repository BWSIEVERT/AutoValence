import Navbar from "./NavBar";
import "../Stylesheets/OrgPageStyles.css";
import {
  OrganizationProfile,
  useOrganization,
  CreateOrganization,
} from "@clerk/clerk-react";

function OrgPage() {
  const { organization } = useOrganization();

  return (
    <>
      <Navbar />
      <div className="organization_container">
        {!organization ? <CreateOrganization /> : <OrganizationProfile />}
      </div>
    </>
  );
}

export default OrgPage;
