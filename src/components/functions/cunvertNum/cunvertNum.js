import React from 'react'

const CunvertNum=()=> {
    let number=44487684688;
 let numwithCommas=number.toLocaleString();
 var arr=numwithCommas.split(',');
//  console.log(arr)  ;
 if (arr.length ==4){
   //  console.log( arr[0]+"."+arr[1].slice(0,2)+"B");
 }else if(arr.length ==3){
    return arr[0]+"."+arr[1].slice(2)+"M";
 }else if(arr.length ==2){
    return arr[0]+"."+arr[1].slice(0,2)+"k";
 }else{
    return number;
 }
 return ;
}

export default CunvertNum
