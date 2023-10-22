import React, { useState } from 'react'
import "../../../App.css";
import { Select, MenuItem } from '@mui/material';
import SelectDays from '../../coinpage/SelectDays';
export default function SelectCoin({allCoins,crypto1,crypto2,onCoinChange,days,handleDaysChange}) {
  // const [crypto1,setCrypto1]=useState("bitcoin");
  // const [crypto2,setCrypto2]=useState("ethereum");
  const style = {
    height: "2.5rem",
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "red",
    },
    "& :hover": {
       "&& fieldset": { borderColor: "green",
   },
   },
  }
  return (
    <div className='selectCoin'>
      <div className='selectCoinFlex'>
        <p>Crypto1</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={crypto1}
          label="crypto1"
          onChange={(e) =>onCoinChange(e,false)}
          sx={style}
        >
         {
          allCoins.filter((coin)=>  coin.id!=crypto2).map((coin,i)=>(
            <MenuItem value={coin.id} key={i}>{coin.name}</MenuItem>
          ))
         } 
        
        </Select>
      </div>
      <div className='selectCoinFlex'>
        <p>Crypto2</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={crypto2}
          label="Crypto2"
          onChange={(e) => onCoinChange(e,true)}
          sx={style}  >

{
          allCoins.filter((coin)=>  coin.id!=crypto1).map((coin,i)=>(
            <MenuItem value={coin.id} key={i}>{coin.name}</MenuItem>
          ))
         } 
        </Select>
      </div>
      <SelectDays days={days} handleDaysChange={handleDaysChange}/>
    </div>
  )
}
