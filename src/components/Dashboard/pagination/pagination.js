import React from "react";
import "./pagination.css";
import Pagination from '@mui/material/Pagination';
export default function Pagination1({page,handlepageChange}) {
      
    
      return (
        <div className='pagination-container'>
          <p> Page:{page}</p>
        <Pagination count={10} page={page} onChange={handlepageChange} />
        </div>
      );
    }