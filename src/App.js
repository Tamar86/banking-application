//import necessary modules and components
import "./App.css";
import AddInterest from "./components/AddInterest";
import DepositMoney from "./components/DepositMoney";
import Charges from "./components/Charges";
import InputComponent from "./components/InputComponent";
import MyContext from "./components/MyContext";
import WithdrawMoney from "./components/WithdrawMoney";
import { useState } from "react";
//Define the App component
function App() {
  //Initialize state variables using useState
  const [inputValue, setInputValue] = useState("");
  const [balance, setBalance] = useState(0);
  //Create values objects to be passed as value to MyContext.Provider
  const values = {
    inputValue,
    balance,
    setBalance,
    setInputValue,
  };
  //Render the App component
  return (
    <div style={{ marginLeft: "40%", marginTop: "10%" }}>
      <MyContext.Provider value={values}>
        <InputComponent />
        <DepositMoney />
        <WithdrawMoney />
        <AddInterest />
        <Charges />
      </MyContext.Provider>
    </div>
  );
}

export default App;
