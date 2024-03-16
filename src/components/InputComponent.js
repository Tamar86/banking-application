//import necessary modules and components
import React, { useContext, useEffect, useRef} from "react";
import MyContext from "./MyContext";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';
//Define InputComponent component
export default function InputComponent() {
  //Retrieve inputValue, balance,setInputValue from the context
  const { inputValue, balance,setInputValue } =
    useContext(MyContext);
    console.log("inputValue in inputComponent", inputValue)
//Create a reference to the input element
  const inputRef = useRef();
//focus on the input element when the component mounts
  useEffect(() => {
    inputRef.current.focus()
  },[])
//Render the InputComponent
  return (
    <div style={{width: "300px", marginRight: "10%"}}>
      <InputGroup className="mb-3" style={{width: "300px", marginRight: "10%"}}>
      
      <Form.Control
        ref={inputRef}
        type="number"
        id="input"
        placeholder="Enter Amount"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        
      />
</InputGroup>
      <h1><Badge style={{width: "300px"}} bg="success">Balance: {balance}</Badge></h1>
    </div>
  );
}
