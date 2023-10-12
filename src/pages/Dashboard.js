import React, { useEffect, useState } from "react";
import Heder from "../components/common/header/header";
import axios from "axios";
import Loader from "../components/loader/loader";
export default function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    // Get 100 coins
    getData();
  }, []);
  const getData = () => {
    setLoader(true);
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
      .then((response) => {
        console.log(response.data);
        setCoins(response.data);
        setLoader(false);
      })
      .catch((error) => {
        // console.log(error.message);
      });
  }
  return (
    <div className="">{
      loader?(<Loader/>):(<>
        <Heder />
        {
          coins && coins.map((coin, indx) => (<p>
            <h1>{coin.name}</h1>
            <img src={coin.image} />
          </p>
          ))
        }
      </>)}
    </div>
  )
}