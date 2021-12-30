import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        setIsEditing(false);
        props.onAddExpense(expenseData);
    };

    const isEditingToggle = () => {
        setIsEditing(!isEditing);
    }

    return (
        <div className={"new-expense"}>
            {!isEditing && <button onClick={isEditingToggle}>ADD NEW EXPENSE</button>}
            {isEditing && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={isEditingToggle}/>
            }
        </div>
    );
};

export default NewExpense;
