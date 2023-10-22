import { color } from 'framer-motion'
import React, { useState } from 'react'
function Info({title,desc}) {
    const Smalldesc=desc.slice(0,300)+ "<br></br><p style='color:red'>Read more...</p>";
    const largedesc=desc+ "<br></br><p style='color:red'>Read less...</p>";
    const[togle,settogle]=useState(false);
  return (
    <div className='info' >
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: (desc.length) >=300 ? ( togle ? largedesc:Smalldesc):(desc)}} className='info_p' onClick={()=>(settogle(!togle))}></p>
    </div>
  )
}

export default Info
