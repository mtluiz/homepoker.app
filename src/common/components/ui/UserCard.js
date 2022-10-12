import React from 'react'

export default function UserCard({name, id, children, voted, voteHidden}) {
  return (
    <div className={`user-card ${voted && "user-card-voted"} ${voteHidden && "user-card-hidden"}`}>
      <div className="user-card__content">
        {children}
      </div>
      <p className='user-card__name'>{name}</p>
    </div>
  )
}
