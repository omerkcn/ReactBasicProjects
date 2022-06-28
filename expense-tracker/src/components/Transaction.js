import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MdDelete } from "react-icons/md";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li
      className={`bg-white flex p-1 my-2 shadow-md border-r-8 ${
        transaction.amount > 0 ? "border-green-500" : "border-red-600"
      }  rounded-lg font-semibold`}
    >
      <button onClick={() => deleteTransaction(transaction.id)}>
        <MdDelete className="h-5 w-5 mx-3 text-red-600" />
      </button>
      {transaction.text}
      <div className="ml-auto mr-2">
        {sign}${Math.abs(transaction.amount)}
      </div>
    </li>
  );
};

export default Transaction;
