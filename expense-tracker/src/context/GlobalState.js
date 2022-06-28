import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Tea", amount: -2 },
    { id: 2, text: "Salary", amount: 450 },
    { id: 3, text: "Holiday", amount: -300 },
    { id: 4, text: "Phone", amount: -50 },
  ],
};
// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function createTransaction(transaction) {
    dispatch({
      type: "CREATE_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction: deleteTransaction,
        createTransaction: createTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
