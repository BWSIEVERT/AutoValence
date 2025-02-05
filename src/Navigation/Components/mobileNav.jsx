import "../Styles/Navbar.css";

function mobileNav() {
  return (
    <div className="mobile-navigation">
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/home">Services</a>
        </li>
        <li>
          <a href="/home">About</a>
        </li>
        <li>
          <a href="/home">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default mobileNav;
