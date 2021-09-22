import React, {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
};

const onAddExpense = () => {
    setIsEditing(false);
}

const startEditingHandler = () => {
    setIsEditing(true);
}
const stopEditingHandler = () => {
    setIsEditing(false);
}

    // using on calls a function when the form is submitted.
    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}> Add New Expense </button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>;
};

export default NewExpense;