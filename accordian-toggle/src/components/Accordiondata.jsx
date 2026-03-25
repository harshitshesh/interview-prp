import React from 'react'

import '../App.css'

const Accordiondata = ({id,title,children,isopen,ontoggle}) => {
  
  const contentid = `accordion-content-${id}`;
  const headerid = `accordion-header-${id}`

  
  return (

    <div className={`accordion-item ${isopen ? 'active':""}`}>

      <button id={headerid} className='accordion-header'  onClick={()=> ontoggle(id)} aria-expanded={isopen} aria-controls={contentid} type='button'>


<span className='accordion-title'>{title}</span>

      </button>
  
<div id={contentid} className='accordion-content-wraper' role='region' aria-labelledby={headerid}>

  <div className='accordion-content-inner'>
    <div className='accordion-content'>{children}</div>
  </div>
</div>


    </div>
  )
}

export default Accordiondata
