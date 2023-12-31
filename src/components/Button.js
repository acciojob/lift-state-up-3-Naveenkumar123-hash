import React from "react";

const Button=({handlefn})=>{
   function clicked(value){
     handlefn(value);
   }



    return(
        <div>
            <h2>Child Component</h2>
            <button onClick={()=>{
                clicked('Option 1')
            }}>Option 1</button>
            <div>
                <h2>Child Component</h2>
                <button onClick={()=>{
                    clicked('Option 2')
                }}>Option 2</button>
            </div>
        </div>
    )
}

export default Button;