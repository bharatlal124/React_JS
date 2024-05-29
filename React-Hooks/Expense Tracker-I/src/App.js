import "./App.css";
import React, {useState} from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
// import React from "react";

export default function App() {
  // Create state for the expenses here
  const [expenses, setExpense] = useState([
    {id:1, text: "Salary", amount:5000},
    {id:2, text: "Groceries", amount: -100},
  
  ]);

  const addExpense = (expense)=>{
    setExpense([...expenses,expense]);
  }

  // render() {
    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
            <ExpenseForm addExpense={addExpense} />
          <div className="expenseContainer">
           <ExpenseInfo expenses={expenses} />
           <ExpenseList expenses={expenses} />
          </div>
        </div>
      </>
    );
  
}
