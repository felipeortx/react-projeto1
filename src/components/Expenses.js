import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [yearEntered, setYearEntered] = useState('0');

  const YearFilterHandler = (year) => {
    setYearEntered(year);
  };

  const expenses = props.expenses.filter(
    (e) =>
      e.date.getFullYear().toString() === yearEntered ||
      yearEntered === '0'
  );

  return (
    <div className="expenses">
      <ExpensesFilter selected={yearEntered} onYearFilter={YearFilterHandler} />
      {expenses.map((e, index) => (
        <ExpenseItem
            key={index}
            id={e.id}
            date={e.date}
            title={e.title}
            amount={e.amount}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default Expenses;
