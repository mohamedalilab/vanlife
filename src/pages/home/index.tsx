import type { JSX } from "react";
import { Link } from "react-router";
import "./home.scss";

function HomePage(): JSX.Element {
  return (
    <main className="home-page">
      <div className="container">
        <h2>You got the travel plans, we got the travel vans.</h2>
        <p>
          Add adventure to your life by joining the #vanlife movement. <br />
          Rent the perfect van to make your perfect road trip
        </p>
        <Link to="/vans">Find your van</Link>
      </div>
    </main>
  );
}

export default HomePage;
