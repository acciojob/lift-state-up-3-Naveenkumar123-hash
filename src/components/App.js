
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import Button from "./Button";

const App = () => {
  let [option,setOption]=useState('');

  function handlefn(values){
    setOption(values);
  }

  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <Button handlefn={handlefn}/>
        <p>Selected option:{option==''?'':option}</p>
    </div>
  )
}
export default App
