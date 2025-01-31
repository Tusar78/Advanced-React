import React, { useState } from 'react'

const UserForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hobby, setHobby] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
  }
  return (
    <div>
      <h2>Enter User Information</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Enter Name' onChange={e => setName(e.target.value)} />
        <input type="text" name="name" placeholder='Enter Age' onChange={e => setAge(e.target.value)} />
        <input type="text" name="name" placeholder='Enter Hobby' onChange={e => setHobby(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UserForm
