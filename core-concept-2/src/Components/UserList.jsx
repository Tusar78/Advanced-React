import React from 'react'
import UserProfile from './UserProfile';

const users = [
  {
    id: 1,
    name: "Tusar",
    age: 26,
    location: "Dhaka, Bangladesh",
    color: '#f2e6ff',
    profile:
      "https://gravatar.com/avatar/a81c3d49afaf45ea689fb8deb044ebba?s=400&d=robohash&r=x",
  },
  {
    id: 2,
    name: "Aopo",
    age: 17,
    location: "Kumilla, Bangladesh",
    color: '#bdd4ff',
    profile:
      "https://gravatar.com/avatar/a81c3d49afaf45ea689fb8deb044ebba?s=400&d=retro&r=x",
  },
];

const UserList = () => {
  return (
    <div className='grid grid-cols-3 gap-3 mt-10 mx-4'>
      {
        users.map(user => <UserProfile key={user.id} user={user} />)
      }
    </div>
  )
}

export default UserList
