import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img src="./assets/LOGO.png" alt="logo de kasa" />
      <nav>
        <NavLink to="/" className={(link) => (link.isActive ? "active" : "")}>
          Accueil
        </NavLink>
        <NavLink
          to="/About"
          className={(link) => (link.isActive ? "active" : "")}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
