import type { JSX } from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

export default function ReviewsRow(): JSX.Element {
  return (
    <div className="reviews-row row">
      <div className="label">
        <h2>review score</h2>
        <span>
          <FaStar />
          <b>5.0</b>/5
        </span>
      </div>
      <Link to={"reviews"}>details</Link>
    </div>
  );
}
