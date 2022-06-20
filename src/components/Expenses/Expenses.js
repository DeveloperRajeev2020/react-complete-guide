import React from 'react';
import Card from '../UI/Card';
import "./Expenses.css";
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import { useState } from 'react';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {// filtered by year
     return expense.date.getFullYear().toString()===filteredYear;
  });

  return (
    <div>
     
      <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesList items={filteredExpenses}/>

       {/* {props.items.map((expense) => ( // using map function 
        <ExpenseItem
        key={expense.id} 
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} 
        />
       ))} */}
        {/* <ExpenseItem 
          title={props.items[0].title} 
          amount={props.items[0].amount}
          date={props.items[0].date} />
        <ExpenseItem 
          title={props.items[1].title} 
          amount={props.items[1].amount}
          date={props.items[1].date}/>
        <ExpenseItem 
          title={props.items[2].title} 
          amount={props.items[2].amount}
          date={props.items[2].date}/>
        <ExpenseItem 
          title={props.items[3].title} 
          amount={props.items[3].amount}
          date={props.items[3].date}/> */}
      </Card>
      </div>
  )
}

export default Expenses;