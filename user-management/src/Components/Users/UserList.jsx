import React, { useEffect, useState } from 'react'
import User from './User';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async() => {
    const response = await fetch('https://randomuser.me/api/?results=20');
    const data = await response.json();    
    setUsers(data.results);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])


  if(loading) return <p>Loading ....</p>
  

  return (
    <div>
      hello {users.length}
      <User />
    </div>
  )
}

export default UserList
