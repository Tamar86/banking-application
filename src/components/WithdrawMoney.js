//import necessary modules and components
import React from "react";
import Button from "./Button";
import MyContext from "./MyContext";
import { useContext } from "react";
//Define WithdrawMoney component
export default function WithdrawMoney() {
  //Retrieve  inputValue, balance, setBalance, setInputValue from the context
  const { inputValue, balance, setBalance, setInputValue } =
    useContext(MyContext);
    //Define handleClick function to handle withdrawing money
    const handleClick = () => {
      //Parse the input value to a float and check if the withdrawal amount
      //is less than equal to the balance
        if (parseFloat(inputValue) <= balance){
            setBalance(balance - parseFloat(inputValue))
            setInputValue("");
        } else {
            alert("Insufficient amount")
            setInputValue("")
        }
       
    }
//Render WithdrawMoney component
  return (
    <div style={{paddingBottom: "10px"}}>
      <Button onClick={handleClick}>Withdraw</Button>
    </div>
  );
}
