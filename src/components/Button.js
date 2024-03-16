//import necessary modules and components
import React from "react";
import {Button as BootstrapButton} from 'react-bootstrap';

//Define the custom Button component
export default function Button({ onClick, children, ...rest }) {
  //Render the BootstrapButton with provided props 
  return (
    <BootstrapButton
   
    style={{width: "300px"}}
      variant="outline-success"
      onClick={onClick}
      {...rest}
    >
      {children}
    </BootstrapButton>
  );
}
