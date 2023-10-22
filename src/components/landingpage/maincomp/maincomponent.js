import React from "react";
import { RWebShare } from "react-web-share";
import "./maincomponent.css";
import Button from "../../common/button/button";
import { motion } from "framer-motion";
import {  toast } from 'react-toastify';
export default function maincomponent() {
    return (
        <div className="main-container">
            <div className="main-text">
                <motion.h1 className="heading1"
                   >TrackCrypto</motion.h1>
                <h1 className="heading2">Real Time</h1>
                <p className="info">TrackCrypto through a public api in real time , and visit dashboard to do so!{" "}
                </p>
                <div className="btns">
                  <a href="/Dashboard" > <Button text={"Dashboard"} /></a>
  <RWebShare
        data={{
          text: "Crypto made by Nilesh",
          url: "https://criptof4.netlify.app ",
          title: "crypto tracker .",
        }}
  onClick={() => toast('🦄 Wow ')}
      >
      <Button text={"Share"} outlined={true} />
   </RWebShare>  
                </div>
            </div>
            <div className="main-imgs">
                <img className="img1" src="https://images-eu.ssl-images-amazon.com/images/I/71qvk+V788L._AC_UL210_SR210,210_.jpg"></img>
                <motion.img className="img2" 
                initial={{  y:10 }}
                    animate={{ y:-10}}
                    transition={{type:"smooth",repeatType:"mirror",delay:0.5, duration:4,repeat:12}}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTU7Uv6EeHOgq7s01rhXRBCF-lXzxaxIOVyQ&usqp=CAU"></motion.img>
            </div>
        </div>
    )
}


