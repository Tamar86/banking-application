//import necessary modules and components
import React from "react";
import Button from "./Button";
import MyContext from "./MyContext";
import { useContext } from "react";
//Define DepositMoney component
export default function DepositMoney() {
  //Retrieve  inputValue, balance, setBalance, setInputValue from the context
  const { inputValue, balance, setBalance, setInputValue } =
    useContext(MyContext);
    //Parse the input value to a float
  const parsedInputValue = parseFloat(inputValue);
  console.log("inputValue", inputValue);
  //Define handleClick function to handle deposit money
  const handleClick = () => {
    setBalance(parsedInputValue + balance);
    setInputValue("");
  };
//Render the DepositMoney component
  return (
    <div style={{paddingBottom: "10px"}}>
      <Button onClick={handleClick}>Deposit</Button>
    </div>
  );
}
