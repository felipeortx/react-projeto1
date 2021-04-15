import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [yearEntered, setYearEntered] = useState('2020');

  const YearFilterHandler = (year) => {
    setYearEntered(year);
    console.log(yearEntered);
  };

  let expenses_render = [];
  expenses_render = props.expenses.map((e) => {
    return (
      <ExpenseItem
        id={e.id}
        date={e.date}
        title={e.title}
        amount={e.amount}
      ></ExpenseItem>
    );
  });

  return (
      <div className="expenses">
        <ExpensesFilter selected={yearEntered} onYearFilter={YearFilterHandler} />
        {expenses_render}
    </div>
  );
}

export default Expenses;
