//Import necessary modules and components
import React from "react";
import Button from "./Button";
import MyContext from "./MyContext";
import { useContext } from "react";
//Define the AddInterest component
export default function AddInterest (){
  //Retrieve balance and setBalance from the context
    const {balance, setBalance} =
  useContext(MyContext);
  //Define handleClick function add interest to the balance
  const handleClick = () => {
    setBalance(balance + (balance/100*5))
    
  }
//Return AddInterest component
    return(
        <div style={{paddingBottom: "10px"}}>
          <Button onClick={handleClick}>Add Interest</Button>  
        </div>
    )
}