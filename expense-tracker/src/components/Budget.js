import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Budget = () => {
  const transactionsList = useContext(GlobalContext);
  const amountList = transactionsList.transactions.map(
    (transaction) => transaction.amount
  );

  // filters the array that contains amount that is bigger than 0 and calculates the total income.
  const income = amountList
    .filter((amount) => amount > 0)
    .reduce((prevAmount, currAmount) => prevAmount + currAmount, 0)
    .toFixed(2);

  // filters the array that contains amount that is less than 0 and calculates the total outcome.

  const expense = amountList
    .filter((amount) => amount < 0)
    .reduce((prevAmount, currAmount) => prevAmount + currAmount, 0);

  console.log(income);

  return (
    <div className="bg-white flex justify-evenly items-center p-1 shadow-lg">
      <div className="">
        <h4 className="text-l">INCOME</h4>
        <h4 className="text-l text-green-500 font-semibold text-center">
          {income}
        </h4>
      </div>
      <div className="border-l border-solid border-[#0000002d] h-7"></div>
      <div className="text-l">
        <h4 className="text-l">EXPENSE</h4>
        <h4 className="text-l text-red-700 font-semibold text-center">
          {(expense * -1).toFixed(2)}
        </h4>
      </div>
    </div>
  );
};

export default Budget;
