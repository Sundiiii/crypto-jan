
import "./tabs.css";
import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from "../Grid/grid"
import List from "../List/list";
import Button from "../../common/button/button"
import CunvertNum from "../../functions/cunvertNum/cunvertNum";
export default function Tabs({ coins,setSearch }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
CunvertNum();

  return (
    <div style={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <div style={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={{ color: "white" }} />
            <Tab label="List" value="list" sx={{ color: "white" }} />
          </TabList>
        </div>
        <TabPanel value="grid">
          <div className="grid-name">
          {coins.length > 0 ?
           (
           coins && coins.map((coin,i) => (
             <Grid coin={coin} delay={0.02*(i%4)}/>
            )) 
          ):(
            <div>
              <h1 style={{textAlign:"center"}}>OOPs..Couldent find the coins your looking for  </h1>
             <div className="btn1">
              <Button text={"Clear Search"} onClick={()=>setSearch("")}/>
              </div>
              </div>
          )
            }
          </div>
          </TabPanel>
        <TabPanel value="list">
        <table className="list-name">
          <tbody>
          {
           coins.length > 0 ?
           (
             coins.map((coin,i) => (
               <List coin={coin} key={i} delay={(4%i)*0.02}/>
               ))
             )
             :
             (<td>
              <h1>OOPs..Couldent find the coins your looking for</h1>
              <div className="btn1">
              <Button text={"Clear Search"} onclick={()=>setSearch("")}/>
              </div>
              </td>
              )
          }
          </tbody>
          
          </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}