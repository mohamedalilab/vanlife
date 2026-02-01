import type { JSX } from "react";
import { Link } from "react-router";

export default function IncomeRow(): JSX.Element {
  return (
    <div className="income-row row">
      <div className="label">
        <h1>welcome!</h1>
        <p>
          income last <u>30 days</u>
        </p>
        <h2>$2.260</h2>
      </div>
      <Link to="income">details</Link>
    </div>
  );
}
