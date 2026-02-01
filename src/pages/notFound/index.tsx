import type { JSX } from "react";
import { Link } from "react-router";
import "./notFound.scss";

function NotFoundPage() : JSX.Element {
  return (
    <main className="not-found-page">
      <div className="container">
        <span className="status-code">404</span>
        <p>Page not found</p>
        <Link to="/" className="">
          back to home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
