import type React from "react";
import { Link, NavLink } from "react-router";

function Header(): React.JSX.Element {
  console.log("Header rendered");
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <img src="./images/logo.png" alt="vanlife" />
        </Link>
        <nav>
          <NavLink to="host">Host</NavLink>
          <NavLink to="vans">Vans</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
