import {  toast } from 'react-toastify';

export const SaveItemtoWatchlist=(e,id)=> {
 
    toast.success('🦄 Wow so easy!');
      e.preventDefault();
 let watchlist= JSON.parse(localStorage.getItem("watchlist",JSON.stringify([id])));
     if(watchlist && !watchlist.includes(id)){
         watchlist.push(id);
        }else{
            watchlist=[id];
        }
       localStorage.setItem("watchlist",JSON.stringify(watchlist));
};
