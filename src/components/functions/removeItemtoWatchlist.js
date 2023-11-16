import { toast } from "react-toastify";

export const removeItemtoWatchlist=(e,id,SetIsCoinAdded)=>{
  e.preventDefault();
  if(window.confirm(`you want to cleare ${id} data`)){
    let watchlist=JSON.parse(localStorage.getItem("watchlist"));
    let newwatrchlist= watchlist.filter((coin)=>coin !=id);
    localStorage.setItem("watchlist",JSON.stringify(newwatrchlist));
   SetIsCoinAdded(false);
    toast.success(`${id} removed`);
    window.location.reload();
}else{
    SetIsCoinAdded(true);
    toast.error("could remove it");
}
   
}