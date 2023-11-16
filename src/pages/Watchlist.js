import React, { useEffect, useState } from 'react';
import { get100coins } from '../components/functions/get100coins';
import "../App.css";
import Tabs from '../components/Dashboard/Tabs/tabs';
import Heder from '../components/common/header/header';
export default function Watchlist() {
  const watchlist=JSON.parse(localStorage.getItem("watchlist"));
const [coins,setcoins]=useState([]);
useEffect(()=>{
if(watchlist){
  getdatalocal();
}
},[]);

 const getdatalocal=async ()=>{
  const allcoins=await get100coins();
  if(allcoins){
   setcoins(allcoins.filter((coin)=>watchlist.includes(coin.id)));
  }
 }
  return (
    <div>
      <Heder/>
      { 
      coins?(
    
       <Tabs coins={coins}/>
            ):(<div>not any history of watchlist</div>)
      }
    </div>
  )
}
