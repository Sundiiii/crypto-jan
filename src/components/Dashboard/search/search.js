import React,{useState} from 'react';
import "./search.css";
import SearchIcon from '@mui/icons-material/Search';
function Search1({search,handlechange}) {
    // console.log(search);
  return (
    <div className='search-flex'>
      <SearchIcon/>
 <input  type="text" placeholder='Search...' className='search-in'
      value={search}   onChange={handlechange} />
    </div>
  )
}

export default Search1
