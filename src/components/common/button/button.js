import React from "react";
import "./button.css";


export default function Button({text,onClick,outlined}){


    return (
        <div className={outlined ? "btn-outlined" : "btn"}
        onClick={onClick} >{text}</div>
    )
}