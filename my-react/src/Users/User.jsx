import React from 'react'
import './User.css'

const User = ({user}) => {
  return (
    <div className='user-list'>
      {user && user.map((usr) => (
        <div key={usr.id} className='user-item'>
            {usr.name}
        </div>
      ))}
    </div>
  )
}

export default User
