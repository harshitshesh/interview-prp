import React from 'react'

const Postcard = ({post}) => {
  return (
    <div style={{
      padding: '24px',
      transition: 'var(--transition)',
      cursor: 'default',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      height: '100%'
    }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{
          color: 'var(--text-dim)',
          fontWeight: '600',
          letterSpacing: '0.05em',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
POST {post.id}

        </span>

      </div>

      <h3 style={{
        fontSize: '18px',
        fontWeight: '700',
        color: 'var(--text-main)',
        lineHeight: '1.4',
        margin: '0'
      }}>
        {post.title}
      </h3>

      <p style={{
        fontSize: '15px',
        color: 'var(--text-muted)',
        lineHeight: '1.6',
        flexGrow: 1
      }}>
        {post.body}
      </p>


      <div style={{
        marginTop: 'auto',
        paddingTop: '16px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)' }}>

<span style={{ fontSize: '14px', fontWeight: '600' }}>{post.author}</span>

        </div>
<div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)'} }>
  <span style={{ fontSize: '13px' }}>{post.email}</span>
</div>

      </div>
      
    </div>
  )
}

export default Postcard
