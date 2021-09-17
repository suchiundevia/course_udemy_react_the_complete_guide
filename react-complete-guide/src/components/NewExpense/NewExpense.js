import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
};

    // using on calls a function when the form is submitted.
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>;
};

export default NewExpense;