//import necessary modules and components
import React from "react";
import Button from "./Button";
import MyContext from "./MyContext";
import { useContext } from "react";
//Define the charges component
export default function Charges (){
    //Retrieve balance and setBalance from the context
    const {balance, setBalance} =
    useContext(MyContext);
     //Define handleClick function apply charges to the balance
    const handleClick = () => {
        setBalance(balance - (balance /100 * 15))
    }
//Render the charges component
    return(
        <div style={{paddingBottom: "10px"}}>
            <Button onClick={handleClick}>Charges</Button>
        </div>
    )
}