import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const transactionsList = useContext(GlobalContext);
  const amountList = transactionsList.transactions.map(
    (transaction) => transaction.amount
  );
  const total = amountList.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h3 className="balance text-l font-semibold">YOUR BALANCE</h3>
      <h2 className="text-xl font-bold mb-2">${total}</h2>
    </div>
  );
};

export default Balance;
