import React from "react";
import "./button.css";


export default function Button({text,onclick,outlined}){


    return (
        <div className={outlined ? "btn-outlined" : "btn"} onClick={()=>onclick()}>{text}</div>
    )
}