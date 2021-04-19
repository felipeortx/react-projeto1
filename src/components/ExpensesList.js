import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.list.length === 0)
    return (
      <p className="expenses-list__fallback">
        There aren't expenses in the selected period.
      </p>
    );

  return props.list.map((e, index) => (
    <ul className="expenses-list">
      <ExpenseItem
        key={index}
        id={e.id}
        date={e.date}
        title={e.title}
        amount={e.amount}
      ></ExpenseItem>
    </ul>
  ));
};

export default ExpensesList;
