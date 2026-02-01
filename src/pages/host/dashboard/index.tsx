import type { JSX } from "react";
import IncomeRow from "./incomeRow";
import ReviewsRow from "./reviewsRow";
import "./dashboard.scss"

function Dashboard(): JSX.Element {
  return (
    <section className="dashboard">
      <IncomeRow />
      <ReviewsRow />
    </section>
  );
}

export default Dashboard;
