import React, { type JSX } from "react";
import type { MonthlyIncome, Transaction } from "../../../types/types";
import Loading from "../../../components/loading";
import "./income.scss";

interface IncomeData {
  monthlyIncome: MonthlyIncome[];
  totalIncome: number;
}

export default function Income(): JSX.Element {
  const [incomeData, setIncomeData] = React.useState<IncomeData | null>(null);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    Promise.all([
      fetch("/api/host/income").then((res) => res.json()),
      fetch("/api/host/transactions").then((res) => res.json()),
    ]).then(([incomeResponse, transactionsResponse]) => {
      setIncomeData(incomeResponse);
      setTransactions(transactionsResponse.transactions || []);
      setLoading(false);
    });
  }, []);

  if (loading || !incomeData) {
    return (
      <section className="host-income">
        <div className="container">
          <Loading />
        </div>
      </section>
    );
  }

  const { monthlyIncome, totalIncome } = incomeData;
  const maxIncome = Math.max(...monthlyIncome.map((m) => m.income), 5000);

  return (
    <section className="host-income">
      <div className="container">
        <div className="income-header">
          <h2>Income</h2>
          <div className="time-filter">
            Last <span className="filter-link">30 days</span>
          </div>
        </div>

        <div className="total-income">
          <span className="income-amount">${totalIncome.toLocaleString()}</span>
        </div>

        <div className="income-chart">
          <div className="chart-container">
            <div className="chart-y-axis">
              <span>$5k</span>
              <span>$4k</span>
              <span>$3k</span>
              <span>$2k</span>
              <span>$1k</span>
              <span>$0</span>
            </div>
            <div className="chart-bars-container">
              <div className="chart-grid-lines">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="grid-line"></div>
                ))}
              </div>
              <div className="chart-bars">
                {monthlyIncome.map((month, index) => {
                  const height = (month.income / maxIncome) * 100;
                  return (
                    <div key={index} className="bar-wrapper">
                      <div
                        className={`bar ${month.isRecent ? "bar-recent" : ""}`}
                        style={{ height: `${height}%` }}
                        title={`${month.month}: $${month.income.toLocaleString()}`}
                      ></div>
                    </div>
                  );
                })}
              </div>
              <div className="chart-x-axis">
                {monthlyIncome.map((month, index) => (
                  <span key={index}>{month.monthAbbr}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="transactions-section">
          <div className="transactions-header">
            <h3>Your transactions ({transactions.length})</h3>
            <div className="time-filter">
              Last <span className="filter-link">30 days</span>
            </div>
          </div>
          <div className="transactions-list">
            {transactions.length === 0 ? (
              <p className="no-transactions">No transactions yet.</p>
            ) : (
              transactions.map((transaction) => (
                <div key={transaction.id} className="transaction-item">
                  <span className="transaction-amount">
                    ${transaction.amount.toLocaleString()}
                  </span>
                  <span className="transaction-date">{transaction.date}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
