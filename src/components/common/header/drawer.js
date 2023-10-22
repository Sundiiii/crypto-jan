import React,{useState}from 'react';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

export default function TemporaryDrawer() {
 const [open,setOpen]=React.useState(false);

  
  return (
    <div>
          
          <IconButton onClick={()=>setOpen(true)}><MenuIcon className='link'/></IconButton>
          <Drawer anchor={"right"} open={open} onClose={()=>setOpen(false)}>
          <div className="drawer-links">
                <a href="/"><p className="link">Home</p></a>
          
                <a href="/compare"><p className="link">compare</p></a>
           
                <a href="/watchlist"><p className="link">watchlist</p></a>
            
                <a href="/dashboard">Dashboard</a>
            </div>
          </Drawer>
    </div>
  );
}