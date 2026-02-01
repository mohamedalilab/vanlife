import type {JSX} from "react";
import { Link } from "react-router";

export default function VansLinks(): JSX.Element {
  return (
    <div className="vans-link">
      <h2>
        your destination is waiting.
        <br />
        your van is ready.
      </h2>
      <Link to="vans">explore our vans</Link>
    </div>
  );
}
