import React,{useState} from 'react'
import MovingRoundedIcon from '@mui/icons-material/MovingRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import "./list.css"
import Coin1 from '../../../pages/Coin';
import { Tooltip } from '@mui/material';
import {motion} from "framer-motion";
import StarsIcon from '@mui/icons-material/Stars';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { removeItemtoWatchlist } from '../../functions/removeItemtoWatchlist';
import { SaveItemtoWatchlist } from '../../functions/SaveItemtoWatchlist';
function List({coin,key,delay}) {
    const watchlist=JSON.parse(localStorage.getItem("watchlist"));
    let X=watchlist.includes(coin.id);
    const [Iscoinadded,SetIsCoinAdded]=useState(X);
  return ( 
     <a href={`/Coin1/${coin.id}`}>   
        <motion.tr className='t-row'
        initial={{opacity:0, x : 50 }}
    whileInView={{opacity:1, x : 0}}
    transition={{duration:1,delay:delay}}
        >
            <Tooltip title="Coin img">
            <td className="coin-c1">
                <img src={coin.image} className='coin-img' />
            </td>
            </Tooltip>
                <td className="">
                    <p className="coin-symbol">{coin.symbol}</p>
                    <p className="coin-name">{coin.name}</p>
                </td>  
    {
      coin.price_change_percentage_24h > 0 ? (
       
        <td className="chip-flex">
            <div className="pricce-chip ar">
               {(coin.price_change_percentage_24h).toFixed(2)}%
             </div>
             <div className="arow pricce-chip ar">  <MovingRoundedIcon /></div>

        </td>
                   )
                   :
                   (
                    
          <td className="chip-flex">
                <div className="pricce-chip1">
                {(coin.price_change_percentage_24h).toFixed(2)}%
                    </div>
                    <div className="arow pricce-chip1">  <TrendingDownRoundedIcon /></div>

          </td>
                         )
     }
                     {
            coin.current_price >= 0 ? (
            <td className="coin-price">${coin.current_price.toLocaleString()}</td>
                ):(
        <td className="coin-price1">${coin.current_price.toLocaleString()}</td>
            )
            }
        <td className="val">
                           Totle Volume:{coin.total_volume.toLocaleString()}
                        </td>
                        <td className="val">
                           Market cap: {coin.market_cap.toLocaleString()}
                        </td> 
                        <td> <div className="watchlist-icon1"
   onClick={(e)=>{
    if(Iscoinadded){
//remove coin
SetIsCoinAdded(false);
removeItemtoWatchlist(e , coin.id,SetIsCoinAdded);
   }else{
    SetIsCoinAdded(true);
       SaveItemtoWatchlist(e , coin.id);
}    
}}
    >
              { Iscoinadded? <StarsIcon/>: <StarOutlineIcon/>}
                </div></td>
        </motion.tr> 
         </a>   
  )
}

export default List
