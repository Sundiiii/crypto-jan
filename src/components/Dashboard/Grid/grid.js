import React from 'react'
import MovingRoundedIcon from '@mui/icons-material/MovingRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import "./grid.css";
import { SaveItemtoWatchlist } from '../../functions/SaveItemtoWatchlist';
import {motion} from "framer-motion";
import Coin1 from '../../../pages/Coin';
import { Tooltip } from '@mui/material';
import {  toast } from 'react-toastify';

import StarsIcon from '@mui/icons-material/Stars';
function grid({ coin,delay}) {
    return (
 <a href={`/Coin1/${coin.id}`}>
<motion.div className={`coins-cointainer pricce-chip ${coin.price_change_percentage_24h <0 
&& "pricce-chip1"}`}
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.5, delay:delay}}>

     <div className="coin-c1">
               <Tooltip title="coin image">
                 <img src={coin.image} className='coin-img' />
                </Tooltip>
                <div className="">
                    <p className="coin-symbol">{coin.symbol}</p>
                    <p className="coin-name">{coin.name}</p>
                </div>
                <div className="watchlistAdd"
   onClick={(e)=>SaveItemtoWatchlist(e,coin.id)}>
                <StarsIcon/>
                </div>
     </div>

    {
      coin.price_change_percentage_24h > 0 ? (
        <div className="chip-flex">
            {/* Tooltip :to add popup msg on symbol/img/btn */}
          <Tooltip title="coin price">
            <div className="pricce-chip">
                  {coin.price_change_percentage_24h.toFixed(2)}%
             </div>
          </Tooltip>
            
             <div className="arow pricce-chip">  <MovingRoundedIcon /></div>

             </div>
                   )
                   :
                   (
                    <div className="chip-flex">
               <Tooltip title="coin price">
                <div className="pricce-chip1">
                {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
               </Tooltip>
              
                    <div className="arow pricce-chip1">  <TrendingDownRoundedIcon /></div>

                    </div>
                         )
                        }
                        {
                            coin.current_price >= 0 ? (
                                <p className="coin-price">${coin.current_price.toLocaleString()}</p>
                            ):(
                                <p className="coin-price1">${coin.current_price.toLocaleString()}</p>
                            )
                        }
                        <p className="volume ">
                           Totle Volume:{coin.total_volume.toLocaleString()}
                        </p>
                        <p className="volume1 ">
                           Market cap: {coin.market_cap.toLocaleString()}
                        </p>
          
</motion.div>
</a>
   )
}

            export default grid
