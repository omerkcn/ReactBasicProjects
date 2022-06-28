import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { createTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: uuid(),
      text,
      amount: parseInt(amount, 10), // string to int conversion
    };
    if (text !== "" && amount !== "") {
      createTransaction(newTransaction);
    } else {
      alert("You should fill all the blanks!");
    }
    //clear form
    setText("");
    setAmount("");
  };

  return (
    <div className="flex flex-col">
      <h4 className="Add-transaction">Add new transaction</h4>

      <label>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Enter text"
          type="text"
          className="input-element p-2 shadow-lg w-4/5"
        />
      </label>
      <label>
        Amount
        <span>(negative - expense, positive - income)</span>
        <input
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          placeholder="Enter amount"
          type="number"
          className="input-element p-2 shadow-lg w-4/5"
        />
      </label>
      <button
        className="btn bg-[#34B3F1] p-2 rounded-md shadow-xl my-4 w-2/3 mx-auto hover:bg-[#2a9bd4]"
        onClick={onSubmit}
      >
        Add
      </button>
    </div>
  );
};

export default AddTransaction;
