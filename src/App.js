import React, { useState, useEffect } from 'react';
import './App.css';
import Expense from './Components/Expense';
import ExpenseForm from './ExpenseForm/ExpenseForm';

const App = () => {
 
  let [newExpenses, setNewExpenses] = useState([]);

  function fetchData() {
    fetch("https://apigenerator.dronahq.com/api/EKWGq6kG/data").then(
      (response) => {
        return response.json();
      }).then(
        (data) => {
          setNewExpenses(data);
        })
  }

  useEffect(() => {

    fetchData();

  }, []);


  let newExpenseFunction = (newExp) => {

    fetch("https://apigenerator.dronahq.com/api/EKWGq6kG/data", {
      method: 'POST',
      body: JSON.stringify(newExp),
      headers: {
        'content-Type': 'application/json'
      }
    }).then(() => {
      fetchData();
    })
    
  }


  return (

    <>
      <h1> Expense Tracker </h1>
      <ExpenseForm exp={newExpenseFunction} />
      <Expense expense={newExpenses} />

    </>
  );
}

export default App;

