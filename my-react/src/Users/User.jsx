import React from 'react'
import './User.css'

const User = ({user, load}) => {
    console.log(load);
    
    
  return (
    <div className='user-list'>
        {
            load && <p>Data is Loading</p>
        }
      {user && user.map((usr) => (
        <div key={usr.id} className='user-item'>
            {usr.name}
        </div>
      ))}
    </div>
  )
}

export default User
