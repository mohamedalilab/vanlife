import type { JSX } from "react";
import { NavLink, Outlet } from "react-router";
import "./hostLayouts.scss";

function HostLayout(): JSX.Element {
  return (
    <main className="host-page">
      <div className="container">
        <nav className="host-nav">
          <NavLink to="." end>
            dashboard
          </NavLink>
          <NavLink to="income">income</NavLink>
          <NavLink to="vans">vans</NavLink>
          <NavLink to="reviews">reviews</NavLink>
        </nav>
        <Outlet />
      </div>
    </main>
  );
}

export default HostLayout;
