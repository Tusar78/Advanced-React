import React from 'react'

const User = ({user}) => {
  
  return (
    <div className='border rounded px-2'>
      <p>name: {user.name.first}</p>
      <p>age: {user.registered.age}</p>
    </div> 
  )
}

export default User
