import React from "react";
import "./header.css";
import Button from "../button/button";
export default function Heder(){


    return(
        <div className="heder">
            <h1>CrypoTracker<span style={{color:"blue" }}>.</span></h1>
            <div className="links">
                <a href=""><p className="link">Home</p></a>
          
                <a href="/compare"><p className="link">compare</p></a>
           
                <a href="/watchlist"><p className="link">watchlist</p></a>
            
                <a href="/dashboard"><Button text={"dashboard"} onclick={()=>alert("hiii")}/></a>
            </div>
        </div>

    )
}
