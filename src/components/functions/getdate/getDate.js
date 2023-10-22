import React from 'react'

export const getingDate=(number)=> {
    const date=new Date(number);
  return date.getDate()+"/"+date.getMonth()+1;
   
}


