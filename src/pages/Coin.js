import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Heder from '../components/common/header/header';
import Button from '../components/common/button/button';
import Loader from '../components/loader/loader';
import List from '../components/Dashboard/List/list';
import Info from '../components/coinpage/info';
import { getcoinData } from '../components/functions/getcoinData/getcoinData';
import Coinpage_chart from '../components/coinpage/coinpage_chart';
import { Dataset } from '@mui/icons-material';
import { SettingcoinObj } from '../components/functions/SettingcoinObj';
import { GetPrices } from '../components/functions/GetPrices';
import { SetingChartData } from '../components/functions/SetingChartData';
import SelectDays from '../components/coinpage/SelectDays';
import ToggleComponents from '../components/coinpage/togglePrice';
const Coin1 = () => {

  const {id} = useParams();
  const [coin, setCoin] = useState({});
  // const [chartdata, setChart_data] = useState({ labels: [], dataset: [{}] });
  const [chartdata,setChart_data]=useState({ labels:[],datasets:[{}]});

  const [err, seterr] = useState(false);
  const [loading, setloader] = useState(true);
  const [days, setdays] = useState(30);
  const [priceType, setpriceType] = useState('prices');

  // const handleChange = async (event) => {
  //   setloader(true);
  //   setdays(event.target.value);
  //   const prices = await GetPrices(id, event.target.value);
  //   if (prices) {
  //     SetingChartData(setChart_data, prices);;
  //     setloader(false);
  //   }
  // };
   const handlePricetypechange = async(event) => {
    setloader(true);
    setpriceType(event.target.value);
    const prices = await GetPrices(id,days, event.target.value);
    if (prices) {
      SetingChartData(setChart_data, prices);;
      setloader(false);
    } 
   };
   const handleDaysChange = async(event) => {
    setloader(true);
    setdays(event.target.value);
    const prices = await GetPrices(id, event.target.value, priceType);
    if (prices) {
      SetingChartData(setChart_data, prices);;
      setloader(false);
    } 
   };

   useEffect(() => { 
    if (id) {getData()}
   }, [id]);

  const getData = async () => {
   setloader(true);
   let coinData = await getcoinData(id);
    SettingcoinObj(coinData, setCoin)
   if (coinData) {
    const prices = await GetPrices(id, days,priceType);
     if (prices) {
      SetingChartData(setChart_data, prices);;
     }
      setloader(false);
      seterr(false);
   }
  }
    // axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    //   .then((response) => {
    //     // console.log(response.data);          
    //     // console.log(response.data.description.en);  
    //     if (response.data) {
    //       setCoin({
    //         id: response.data.id,
    //         name: response.data.name,
    //         symbol: response.data.symbol,
    //         image: response.data.image.large,
    //         desc: response.data.description.en,
    //         price_change_percentage_24h: response.data.market_data.price_change_percentage_24h,
    //         current_price: response.data.market_data.current_price.usd,
    //         total_volume: response.data.market_data.total_volume.usd,
    //         market_cap: response.data.market_data.market_cap.usd
    //       })
    //       setloader(false);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("errrrr" + error.message);
    //     seterr(true);
    //     setloader(false);
    //   });

    //  axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    //  .then((response) => {
    //   //  console.log(response.data);
    //   // console.log("char "+ chart_data.labels);
    //   // console.log("char "+ chart_data.dataset);
    //   if (response.data) {
    //     const prices=response.data.prices;
    //     console.log(prices);
    //     // make shure naming of labels and datasets should be same sa format
    //        setChart_data({
    //          labels:prices.map((data)=>GetingDate(data[0])),
    //          datasets:[
    //           {
    //           label: coin.name,
    //           data:prices.map((data)=>data[1]),
    //           borderwidth: 1,
    //           fill: true,
    //           backgroundColor:  "rgba(58,128,200,0.1)" ,
    //           tension: 0.25,
    //           borderColor: "#3a80e9",
    //           pointRedius: 0,
    //          },
    //         ],
    //         } );
    //         setloader(false);
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //       seterr(true);
    //       setloader(false);
    //     });
  // }
  // const chartdata = {
  //   labels:["mon", "Tue", "Wed", "Tha", "Fra"],
  //   datasets: [{
  //     label: coin.id, data: [11, 112, 322, 443, 554], borderwidth: 1,fill: true, tension: 0.25,
  //     backgroundcolor:  "Tranparent" , borderColor: "#3a50e9",pointRedius: 0, }],} 


  return (
    <div>
      <Heder />      
      {
         !err && !loading && coin.id ? (
           <>
            <List coin={coin} delay={0.2} />
              <div className="coinchart">
              <SelectDays days={days} handleDaychange={handleDaysChange} />
               <ToggleComponents priceType={priceType} handlePricetypechange={handlePricetypechange} />
               < Coinpage_chart chartdata={chartdata} />
           </div> 
            <Info title={coin.name} desc={coin.desc} />
           </>
         ) : err ?
          (
              <div>
               <h1 style={{ textAlign: "center" }}>OOPs..Couldent find the coins your looking for  </h1>
               <div className="btn1">
                 <a href='/Dashboard'>
                <Button text="Dashboard" /> </a>
              </div>
             </div>
          )
          : (<Loader />)
      }
    </div>
  )
}

export default Coin1;

