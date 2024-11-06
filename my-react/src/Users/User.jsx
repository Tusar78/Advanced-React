import React from 'react'
import './User.css'

const User = ({user, load, error}) => {
    // console.log(load);
    console.log(error);
    
    
  return (
    <div className='user-list'>
        {
            error && <p>Data is error</p>
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
