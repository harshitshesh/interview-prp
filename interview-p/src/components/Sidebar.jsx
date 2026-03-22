import React from 'react'

const Sidebar = ({users,postcounts,loading,selectedids,ontoggle}) => {
  return (
    <div>

        <aside style={{ 
      width: '320px',
      backgroundColor: 'var(--bg-sidebar)',
      borderRight: '1px solid var(--border)',
      height: '100vh',
      position: 'sticky',
      top: 0,
      padding: '32px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      overflowY: 'auto'
    }}>

<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <h2 style={{ fontSize: '20px', fontWeight: '700' }}>Authors</h2>
</div>

<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
<div style={{ 
          fontSize: '12px', 
          fontWeight: '600', 
          color: 'var(--text-dim)', 
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
            <p>Filter by Author</p>


</div>

{loading  ?(
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

        {[1,2,3,4,5,6].map(i =>(
            <div key={i} style={{ height: '48px', width: '100%', borderRadius: '12px' }}></div>
        ))}

    </div>
):(
    users.map(u=>{
        const isSelected = selectedids.includes(u.id);
        return (
            <button key={u.id} onClick={()=> ontoggle(u.id)} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--primary)' : 'transparent',
                  backgroundColor: isSelected ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                  color: isSelected ? 'var(--primary)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'var(--transition)',
                  fontSize: '14px',
                  fontWeight: isSelected ? '600' : '400'
                }}>

                    <span>{u.name}

                    </span>
                    <span style={{ 
                  backgroundColor: isSelected ? 'var(--primary)' : 'var(--border)', 
                  color: isSelected ? 'white' : 'var(--text-dim)',
                  padding: '2px 8px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: '700'
                }}>{postcounts?.[u.id] || 0}</span>

            </button>
        )
    })
)}

</div>
    </aside>
      
    </div>
  )
}

export default Sidebar
