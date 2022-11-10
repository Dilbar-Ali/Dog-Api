import React from "react"
import "./button.css";

const Button=({title,onclick})=>{
    return(
        <>
         <button className="btn" onClick={onclick}>{title}</button>
        </>
    )
}

export default Button;