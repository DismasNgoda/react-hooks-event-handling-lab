// Code Keypad Component Here
import React from "react";

function Keypad (){
    function keypadFunction(e){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={keypadFunction} />
        </div>
    )
}

export default Keypad;