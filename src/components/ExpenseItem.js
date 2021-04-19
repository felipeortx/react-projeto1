import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("update");
    console.log(title);
  };

  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
          {/* <button onClick={clickHandler}>Change Title</button> */}
        </div>
      </div>
    </li>
  );
}

export default ExpenseItem;
