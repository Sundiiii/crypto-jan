import React from "react";
import "./button.css";


export default function Button({text,onclick}){


    return (
        <div className="btn" onClick={()=>onclick()}>{text}</div>
    )
}