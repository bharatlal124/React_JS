import React from "react";
import Transaction from "../Transaction/Transaction";
import styles from "./ExpenseList.module.css";

export default function ExpenseList({ expenses }) {
  // render() {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {/* {expenses.map((expense) =>(
            <li key={expense.id}>
              {expense.text}
              <span>{expense.amount < 0 ? "-" : "+"}${Math.abs(expense.amount)}</span>
            </li>
          ))} */}
        {expenses.map((expenses) => {
          return (
            <Transaction
              // index={i}
              key={expenses.id}
              expense={expenses}
            // deleteExpense={deleteExpense}
            // changeExpenseToUpdate={changeExpenseToUpdate}
            />
          );
        })}
      </ul>
    </div>
  );
  // }
}
