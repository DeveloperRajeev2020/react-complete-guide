import './ExpenseDate.css';

const ExpenseDate = (props) => {
    //zconsole.log(props.date.toLocaleDateString());
    const month = props.date?.toLocaleDateString('en-US', { month: 'long' });
    const day = props.date?.toLocaleDateString('en-US', { day: '2-digit' });
    const year = props.date?.getFullYear();
    return (
    <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
    </div>
   )
}


export default ExpenseDate;