import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expensesState, setExpensesState] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const AddNewExpenseHandler = (expense) => {
    setExpensesState((prev) => {
      return [...prev, expense];
    });

    console.log(expensesState);
  };

  return (
    <div>
      <NewExpense onAddNewExpense={AddNewExpenseHandler} />
<<<<<<< HEAD
      <Expenses expenses={expensesState} />
=======
      <br />
      <Expenses expenses={expenses} />
>>>>>>> 35570ac7f00cfd9b7cdd7a73093fb8bd53ef795b
    </div>
  );
}

export default App;
