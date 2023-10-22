import React from "react";
import "./header.css";
import Button from "../button/button";
import TemporaryDrawer from "./drawer";

export default function Heder(){


    return(
        <div className="heder">
            <h1>CrypoTracker<span style={{color:"blue" }}>.</span></h1>
            <div className="links">
                <a href="/Home"><p className="link">Home</p></a>
          
                <a href="/Compare"><p className="link">compare</p></a>
           
                <a href="/Watchlist"><p className="link">watchlist</p></a>
            
                <a href="/Dashboard"><Button text={"dashboard"} onclick={()=>alert("hiii")}/></a>
            </div>
            <div className="drawer-container">
                <TemporaryDrawer/>
            </div>
        </div>

    )
}
