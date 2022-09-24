import React from 'react'

export default function UserCard({name, id, children}) {
  return (
    <div className='user-card'>

      <div className="user-card__content">
        {children}
      </div>
      
      <p className='user-card__name'>{name}</p>
    </div>
  )
}
