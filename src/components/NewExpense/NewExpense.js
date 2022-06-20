 import React, {useState} from "react";
 import ExpenseForm from "./ExpenseForm";
 import './NewExpense.css';
 
 const NewExpense = (props) => {
  const [isEditing,isSetEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
 };


 const startEditingHandler = () => {
    isSetEditing(true);
 }

 const cancelEditingHandler = () => {
    isSetEditing(false);
 }
  return <div className="new-expense">
    {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    { isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEditingHandler}/>}
  </div>
};

export default NewExpense;