import  React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

export default function ToggleComponents({priceType,handlePricetypechange}) {

  return (
    <div  style={ {display:'flex',justifyContent:'center',
    alignItems:'center',marginBottom:'1.5rem'}}>

    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={(e)=>handlePricetypechange(e)}
      sx={
            {"& .MuiSelect-select":{
                color:"orange"
            },
            borderColor:"blue",
            border:"unset",            
            "& .MuiToggleButtonGroup-grouped":{
                border:"1px solid",
        borderColor:"unset",
        color:"blue",
        },
        "& .MuiToggleButton-standard":{
             color:"blue",},
    }}     
    >
      <ToggleButton value="prices" > prices  </ToggleButton>
      <ToggleButton value="market_caps"> market_caps  </ToggleButton>
      <ToggleButton value="total_volums">  total_volums </ToggleButton>
       </ToggleButtonGroup>
          </div>
  );
}