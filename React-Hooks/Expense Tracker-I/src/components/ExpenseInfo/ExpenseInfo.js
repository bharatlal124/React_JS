import React from "react";
import styles from "./ExpenseInfo.module.css";

export default function ExpenseInfo({ expenses }) {

  // const totalBalance = expenses.reduce((total, item) => total + item.amount, 0);

  // const income = expenses
  //   .filter((item) => item.amount > 0)
  //   .reduce((total, item) => total + item.amount, 0);

  // const expense = expenses
  //   .filter((item) => item.amount < 0)
  //   .reduce((total, item) => total + Math.abs(item.amount), 0);

  let profitAmount = 0;
  let lossAmount = 0;
  const grandTotal = expenses.reduce((acc, currentExpense) => {
    const currentExpenseAmount = parseInt(currentExpense.amount);
    if (currentExpenseAmount < 0) {
      lossAmount += currentExpenseAmount;
    } else {
      profitAmount += currentExpenseAmount;
    }
    return currentExpenseAmount + acc;
  }, 0);


  // render() {
  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1 data-testid="total-balance">${grandTotal.toFixed(2)}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}
            data-testid="income-amount">
            +${profitAmount}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}
            data-testid="expense-amount">
            -${lossAmount}
          </p>
        </div>
      </div>
    </div>
  );
  // }
}
