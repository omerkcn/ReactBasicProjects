import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Budget from "./components/Budget";
import Transactions from "./components/Transactions";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-[#DAEAF1] h-screen flex flex-col justify-center items-center">
        <div className="bg-[#F9F2ED] w-2/4 p-6 rounded-lg shadow-xl shadow-blue-200">
          <Header />
          <Balance />
          <Budget />
          <Transactions />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
