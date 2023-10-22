import React from 'react'
import "./topscroll.css";
import { ExpandLessRounded } from '@mui/icons-material';
export default function topscroll() {
   let mybtn= document.getElementById("topscroll");
   window.onscroll=()=>{
scrollfunction()
   };
   function scrollfunction(){
    if(document.body.scrollTop>500|| document.documentElement.scrollTop >500){
  mybtn.style.display="flex";
}else{
        mybtn.style.display="none";
    }

   }
  return (
    <div className="topScroll1" id='topscroll'
    onClick={()=>{
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    }}
    >
      <ExpandLessRounded/>
    </div>
  )
}
