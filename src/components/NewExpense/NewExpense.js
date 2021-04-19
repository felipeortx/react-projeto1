import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [expenseFormVisible, setExpenseFormVisible] = useState(false);

  const AddNewExpenseClickHandler = () => {
    setExpenseFormVisible(!expenseFormVisible);
  };

  const AddNewExpenseHandler = (expense) => {
    const newExpense = {
      id: Math.random().toString(),
      ...expense,
    };

    props.onAddNewExpense(newExpense);
    AddNewExpenseClickHandler();
  };

  return (
    <div className="new-expense">
      {expenseFormVisible && (
        <ExpenseForm
          onAddNewExpense={AddNewExpenseHandler}
          onCancel={AddNewExpenseClickHandler}
        />
      )}
      {!expenseFormVisible && (
        <button onClick={AddNewExpenseClickHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
