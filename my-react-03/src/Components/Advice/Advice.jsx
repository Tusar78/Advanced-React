import React, { useEffect, useState } from 'react'

const Advice = () => {

    const [advice, setAdvice] = useState([]);
    const [count, setCount] = useState(0);

    const loadAdvice = async () => {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        setAdvice(data.slip.advice);  
        setCount(count => count + 1)      
    }

    useEffect(() => {
        loadAdvice()
    }, [])

  return (
    <>
      <p>{advice}</p>
      <button onClick={loadAdvice}>New</button>
      <p>I have read <strong>{count}</strong> the message</p>
    </>
  )
}

export default Advice
