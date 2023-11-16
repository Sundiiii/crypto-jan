import {  toast } from 'react-toastify';

export const SaveItemtoWatchlist=(e,id)=> {
 
    e.preventDefault();
    toast.success('coin saved');
 let watchlist= JSON.parse(localStorage.getItem("watchlist",JSON.stringify([id])));
     if(watchlist && !watchlist.includes(id)){
         watchlist.push(id);
        }else{
            watchlist=[id];
        }
       localStorage.setItem("watchlist",JSON.stringify(watchlist));
};
