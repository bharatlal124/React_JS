import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";

export default function ExpenseForm({ addExpense }) {
  // Create state or ref for the inputs here
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: parseFloat(amount),
    };

    addExpense(newExpense);

    setText("");
    setAmount("");
  }

  // render() {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        required
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
  // }
}
