import React, { useState } from 'react';
import './ExpenseForm.css';
import Card from '../UI/Card';


const ExpenseForm = (props) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }

    const amountHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (title != "" && amount != "" && date != "") {
        
            const newExpense = {
                title,
                amount,
                date: new Date(date),
                id: Math.random().toString()
            }

            props.exp(newExpense);


            setTitle("");
            setAmount("");
            setDate("");
        }
        else{
            alert("Fill All the Details..");
        }
    }

    return (
        <>

            <Card className="containerform">
                <form onSubmit={submitHandler}>
                    <div className="main">
                        <div className="titleField">
                            <label>Title</label>
                            <input type="text" value={title} onChange={titleHandler} />
                        </div>

                        <div className="amountField">
                            <label>Amount</label>
                            <input type="number" value={amount} min="5" onChange={amountHandler} />
                        </div>

                        <div className="dateField">
                            <label>Date</label>
                            <input type="date" value={date} onChange={dateHandler} />
                        </div>

                    </div>

                    <div>
                        <input type="submit" className="submitbtn" />
                    </div>
                </form>

            </Card>
        </>
    );
}

export default ExpenseForm;