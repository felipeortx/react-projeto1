import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  
  const AddNewExpenseHandler = (expense) => {
    const newExpense = {
        id: Math.random().toString(),
        ...expense
    }

    props.onAddNewExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddNewExpense={AddNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
