import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./Chart/ExpensesChart";

function Expenses(props) {
  const [yearEntered, setYearEntered] = useState("0");

  const YearFilterHandler = (year) => {
    setYearEntered(year);
  };

  const expenses = props.expenses.filter(
    (e) =>
      e.date.getFullYear().toString() === yearEntered || yearEntered === "0"
  );

  return (
    <div className="expenses">
      <ExpensesFilter selected={yearEntered} onYearFilter={YearFilterHandler} />
      <ExpensesChart expenses={expenses} />
      <ExpensesList list={expenses} />
    </div>
  );
}

export default Expenses;
