import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const personInfo = {
    name: 'Tusar',
    age: 24,
    job: 'Web Developer'
  }


  const [count, setCount] = useState(0);
  const [myCount, setMyCount] = useState(0);
  
  const handleClick = () => {
    setCount(count => count + 1);
  }

  const handleClickT = () => {
    setMyCount(myCount => myCount + 1)
  }

  useEffect(() => {
    console.log('Effect');
  },[count])
  return (
    <>
      {
        console.log('Render')        
      }
      <p>i am count <span>{count}</span> </p>
      <p>i am my count <span>{myCount}</span> </p>
      <button onClick={handleClick}>count + </button>
      <button onClick={handleClickT}>mycount +</button>
      <Card personInfo={personInfo}></Card>
    </>
  );
}

function Card({personInfo:{name, age, job}}) {
  const cardStyle = {
    border: '1px solid palegreen',
    borderRadius: '8px',
    padding: '6px 60px'
  }

  return (
    <>
      <div style={cardStyle}>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Job: Web Developer</p>
      </div>
    </>
  )
}

export default App;
