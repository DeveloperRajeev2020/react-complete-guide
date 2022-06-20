import React, { useState } from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
//import ExpenseItem from './components/ExpenseItem';

const dummyExpenses = [
  { id:'e1', 
    title: 'Toilet Paper', 
    amount: 94.12, 
    date: new Date(2022, 5, 12)
  },
  { id:'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 5, 11)
  },
  { id:'e3', 
    title: 'Car Insurance', 
    amount: 294.67, 
    date: new Date(2020, 5, 9)
  },{ id:'e4', 
    title: 'New Desk(Wooden)', 
    amount: 450, 
    date: new Date(2021, 5, 5)
  },{ id:'e5', 
  title: 'New Wood(Strom)', 
  amount: 475, 
  date: new Date(2020, 5, 21)
}
];

const App = () => {

  const [expenses,setExpenses] = useState(dummyExpenses);
  const addExpenseHandler = (expense) => {
     //console.log('in app.js');
     //console.log(expense);
     setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
     });
  };
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Library Expenses Application</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
