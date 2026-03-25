import React, { useState } from 'react'
import Accordiondata from './Accordiondata'

const Accordionparent = ({items=[],multi = false,defaultopen=null,ontoggle}) => {

const [openid,setopenid] =  useState(()=>{
  if(multi){
    return defaultopen ? [defaultopen]:[]
  }
  return defaultopen
})

const handletoggle = (id)=>{
  if(multi){
    const newopenid =  openid.includes(id) ? openid.filter((oid)=> oid !== id): [...openid,id];

    setopenid(newopenid)

    if(ontoggle) ontoggle(id,newopenid.includes(id))
  }else{
const oneopen = openid === id;
const nextid = oneopen ? null:id;
setopenid(nextid)
if(ontoggle) ontoggle(id,!oneopen)}
}


if(!items || items.length == 0){
  return null;
}

  return (
    <div>

      {items.map((item)=>(
        <Accordiondata
        key={item.id} id={item.id} title={item.title} isopen={multi ? openid.includes(item.id):openid == item.id} ontoggle={handletoggle}>

          {item.content}
        </Accordiondata>
      ))}
      
    </div>
  )
}

export default Accordionparent
