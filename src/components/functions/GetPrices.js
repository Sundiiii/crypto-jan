import React from 'react'
import axios from 'axios';
export const GetPrices = (id, days,priceType) => {
    const priceData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
        .then((response) => {
            if (response.data) {
                if(priceType =="market_caps"){
                    return  response.data.market_caps;
                }else if(priceType =="total_volumes"){
                        return  response.data.total_volumes;
                    }else{
                        return  response.data.prices;
                    }
                // make shure naming of labels and datasets should be same sa format
                //   setChart_data({
                //     labels:prices.map((data)=>GetingDate(data[0])),
                //     datasets:[
                //      {
                //      label: coin.name,
                //      data:prices.map((data)=>data[1]),
                //      borderwidth: 1,
                //      fill: true,
                //      backgroundColor:  "rgba(58,128,200,0.1)" ,
                //      tension: 0.25,
                //      borderColor: "#3a80e9",
                //      pointRedius: 0,
                //     },
                //    ],
                //    } )     
            }
        }).catch((error) => {
            console.log(error.message);
        });
    return priceData;
}
