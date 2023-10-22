import React, { useEffect, useState } from 'react'
import Heder from '../components/common/header/header'
import SelectCoin from '../components/Comparepage/Selectcoins/SelectCoin'
import Loader1 from '../components/loader/loader';
import List from '../components/Dashboard/List/list';
import SelectDays from '../components/coinpage/SelectDays';
import {get100coins} from '../components/functions/get100coins';
import { getcoinData } from '../components/functions/getcoinData/getcoinData';
import { SettingcoinObj } from '../components/functions/SettingcoinObj';
import Info from '../components/coinpage/info';
import { GetPrices } from '../components/functions/GetPrices';
import { SetingChartData } from '../components/functions/SetingChartData';
import Coinpage_chart from '../components/coinpage/coinpage_chart';
import ToggleComponents from '../components/coinpage/togglePrice';
export default function Compare() {
  const [allCoins,setAllCoins]=useState([]);
  const [Loader,setLoader]=useState(false);
  const [crypto1,setCrypto1]=useState("bitcoin");
  const [crypto2,setCrypto2]=useState("ethereum");
  // data status
  const [coin1Data,setCoin1Data]=useState({});
  const [coin2Data,setCoin2Data]=useState({});
  // day status
  const [days,setDays]=useState(30);
  const [chartdata,setchartdata]=useState({ labels:[],dataset:[],});
  const [priceType, setpriceType] = useState('left');

  useEffect(()=>{
getData();
},[])
const getData=async()=>{
  setLoader(true);
  const coins=await get100coins();
  if(coins){
    setAllCoins(coins);
    const data1=await getcoinData(crypto1);
    const data2= await getcoinData(crypto2);
    // setCoin1Data(data1);
    SettingcoinObj(data1,setCoin1Data) //this function to distructuring data
    // setCoin2Data(data2);
    SettingcoinObj(data2,setCoin2Data) //this function to distructuring data
    if(data1 && data2){
      const prices1=await GetPrices(crypto1,days,priceType);
      const prices2=await GetPrices(crypto2,days,priceType);
    SetingChartData(setchartdata,prices1,prices2);
    }
    setLoader(false);
  }
};
const onCoinChange=async(e,isCoin2)=>{
  setLoader(true);
  if(isCoin2){
    const tempCrypto2=e.target.value;
    setCrypto2(e.target.value)
    const data2= await getcoinData(crypto2);
    SettingcoinObj(data2,setCoin2Data) //this function to distructuring data
    const prices1=await GetPrices(crypto1,days,priceType);
      const prices2=await GetPrices(tempCrypto2,days,priceType);
    SetingChartData(setchartdata,prices1,prices2);// setCoin2Data(data2);
  }else{
    const tempsetCrypto1=e.target.value;
    setCrypto1(e.target.value)
    const data1=await getcoinData(crypto1);
    SettingcoinObj(data1,setCoin1Data) //this function to distructuring data
    const prices1=await GetPrices(tempsetCrypto1,days,priceType);  
      const prices2=await GetPrices(crypto2,days,priceType);
    SetingChartData(setchartdata,prices1,prices2);// setCoin1Data(data1);

}
setLoader(false);
}
const handleDaysChange =async(e)=>{
  setLoader(true);
  const tempday=e.target.value;
  setDays(tempday);
  const prices1=await GetPrices(crypto1,tempday,priceType);
      const prices2=await GetPrices(crypto2,tempday,priceType);
    SetingChartData(setchartdata,prices1,prices2);
    setLoader(false);
}
const handlePricetypechange =async(e)=>{
  setLoader(true);
  const newpriceType=e.target.value;
  setpriceType(newpriceType);
  const prices1=await GetPrices(crypto1,days,priceType,newpriceType);
      const prices2=await GetPrices(crypto2,days,priceType,newpriceType);
    SetingChartData(setchartdata,prices1,prices2);
    setLoader(false);
}
  return (
    <div >
      {
        Loader || !coin1Data?.id ||!coin2Data?.id ?<Loader1/>:
        <> 
        <Heder/> 
        <div className='compare-Container'> 
        <SelectCoin allCoins={allCoins}
         crypto1={crypto1}
          crypto2={crypto2}
          onCoinChange={onCoinChange}
          days={days}
          handleDaysChange={handleDaysChange}/> 
        {/* <SelectDays ptag={true}/> */}
        </div>  
        <List coin={coin1Data}/>
        <List coin={coin2Data}/>
       < ToggleComponents priceType={priceType}
       handlePricetypechange={handlePricetypechange}/>
        <Coinpage_chart chartdata={chartdata}/>
        <Info  title={coin1Data.name} desc={coin1Data.desc}   />
        <Info  title={coin2Data.name} desc={coin2Data.desc}   />
        
        </>  
  }
    </div>
)}
