import React from 'react'
import axios from 'axios';
export const  get100coins=()=> {
  const coins=  axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  )
    .then((response) => {
      if(response){
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
    if(coins)return coins;
}
