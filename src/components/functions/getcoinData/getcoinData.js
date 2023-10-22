import React from 'react'
import axios from 'axios';
export  const  getcoinData=(id)=> {
  const coin=  axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
        // setCoin({
        //   id: response.data.id,
        //   name: response.data.name,
        //   symbol: response.data.symbol,
        //   image: response.data.image.large,
        //   desc: response.data.description.en,
        //   price_change_percentage_24h: response.data.market_data.price_change_percentage_24h,
        //   current_price: response.data.market_data.current_price.usd,
        //   total_volume: response.data.market_data.total_volume.usd,
        //   market_cap: response.data.market_data.market_cap.usd
        // })
        // setloader(false);
      }
    })
    .catch((error) => {
      console.log(error.message);   
    });
    return coin;
    // return coin ? coin :"error";
}
