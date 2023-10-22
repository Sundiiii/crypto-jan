import React,{useState} from 'react'
import { Select,MenuItem } from '@mui/material';
import "../../App.css";
export default function SelectDays({day,handleDaysChange,ptag}) { 

  return (
    <div className='chart-flex'style={{marginBottom:ptag && 0}}>
      {!ptag && <p > change Range  in</p>}
       <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={day}
          label="Day"
          onChange={(e)=>handleDaysChange(e)} 
           sx={{
            height:"2.5rem",
            color:"white",
            "& .MuiOutlinedInput-notchedOutline":{
              borderColor:"var(--white)",
            },
            "& .MuiSvgIcon-root":{
              color:"red",
             },           
            "& :hover":{
      "&& fieldset":{
        borderColor:"green",
      },
      },
    }}     
        >
          <MenuItem value={10}>10 day</MenuItem>
          <MenuItem value={20}>20 day</MenuItem>
          <MenuItem value={30}>30 day</MenuItem>
          <MenuItem value={60}>60 day</MenuItem>
          <MenuItem value={120}>120 day</MenuItem>
          <MenuItem value={180}>180 day</MenuItem>
          <MenuItem value={240}>240 day</MenuItem>
          <MenuItem value={300}>300 day</MenuItem>
          <MenuItem value={360}>360 day</MenuItem>
        </Select>
    </div>
  )
}
