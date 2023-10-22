import React from 'react'
import {getingDate} from './getdate/getDate';
export const SetingChartData=(setChartdata,prices1,prices2)=> {
   if(prices2){ setChartdata({
                 labels:prices1?.map((data)=>getingDate(data[0])),
                 datasets:[
                  {
                  label: "Crypto 1",
                  data:prices1?.map((data)=>data[1]),
                  borderWidth: 1,
                  fill: false,
                  backgroundColor:  "rgba(58,128,200,0.1)" ,
                  tension: 0.25,
                  borderColor: "#3a80e9",
                  pointRadius: 0,
                  yAxisID:"crypto1",
                },
                {
                   label:"crypto2",
                  data:prices2?.map((data)=>data[1]),
                  borderWidth: 1,
                  fill: false,
                  backgroundColor:  "rgba(58,128,200,0.1)" ,
                  tension: 0.25,
                  borderColor: "green",
                  pointRadius: 0,
                  yAxisID:"crypto2",
                 },
                ],
                } );
        }
            
}
