import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
const Transactions = () => {
  const transactionsList = useContext(GlobalContext);

  return (
    <div>
      <h4 className="text-xl">History</h4>
      <hr />
      <ul>
        {transactionsList.transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
