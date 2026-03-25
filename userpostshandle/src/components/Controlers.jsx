import React from 'react'

const Controlers = ({searchval,setchange,sortby,setsortby}) => {
    
  return (
    <div style={{ 
      padding: '16px 24px', 
      display: 'flex', 
      alignItems: 'center', 
      gap: '24px',
      marginBottom: '32px',
      flexWrap: 'wrap'
    }}>
      <div style={{ 
        flex: 1, 
        minWidth: '250px', 
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}>

<input type="text"  placeholder='search posts by title ..' value={searchval} onChange={(e)=>setchange(e.target.value)}   style={{
            width: '100%',
            padding: '12px 16px 12px 48px',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            backgroundColor: 'rgba(0,0,0,0.2)',
            color: 'var(--text-main)',
            fontSize: '15px',
            outline: 'none',
            transition: 'var(--transition)'
          }}  />


      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

        <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-dim)' }}>Sort By</span>
        <select value={sortby} onChange={(e)=> setsortby(e.target.value)} style={{
            padding: '10px 16px',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            backgroundColor: 'rgba(0,0,0,0.2)',
            color: 'var(--text-main)',
            fontSize: '14px',
            outline: 'none',
            cursor: 'pointer',
            transition: 'var(--transition)'
          }} >

            <option value="id">Default</option>
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
            <option value="author">Name</option>
          </select>



      </div>
      
    </div>
  )
}

export default Controlers
