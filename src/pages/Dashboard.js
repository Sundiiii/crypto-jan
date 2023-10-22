import React, { useEffect, useState } from "react";
import Heder from "../components/common/header/header";
import axios from "axios";
import Search1 from "../components/Dashboard/search/search";
import Loader from "../components/loader/loader";
import Tabs from "../components/Dashboard/Tabs/tabs";
import Topscroll from "../components/common/topScrollbutton/topscroll";
import Pagination1 from "../components/Dashboard/pagination/pagination";
export default function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page,setPage]=useState(1);
  const[search,setSearch]=useState("");
  const[paginatedcoins,setpeginatedcoins]=useState([]);
  const handlepageChange = (event, value) => {
    setPage(value);
    // value=new page num
    var initialcount=(value-1)*10;
    setpeginatedcoins(coins.slice(initialcount,initialcount+10));
  }
  useEffect(() => {
    // Get 100 coins
    getData();
  }, []);
  const getData = () => {
    setLoader(true);
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
      .then((response) => {
        // console.log(response.data);
        setpeginatedcoins(response.data.slice(0,10));
        setCoins(response.data);
        setLoader(false);
      })
      .catch((error) => {
        // console.log(error.message);
      });
  }
   const handlechange=(e)=>{
 setSearch(e.target.value);
   }
   var filteredcoin=coins.filter((coin)=>
   (coin.name.toLowerCase().includes(search.trim(" ").toLowerCase())
   ||coin.symbol.toLowerCase().includes(search.trim(" ").toLowerCase())))
  return (
    <div className="">{
      loader?(<Loader/>):(<>
        <Heder />
        <Search1 search={search} handlechange={handlechange}/>
        <Tabs coins={search?filteredcoin:paginatedcoins} setSearch={setSearch}/>
       {!search &&(
         <Pagination1 page={page}handlepageChange={handlepageChange}/>
)}
      </>)}
      <Topscroll/>
    </div>
  )
}