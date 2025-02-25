import React, { useEffect, useState } from "react";

const PracticeR = () => {
  const [seconds, setSeconds] = useState(0);
  
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds(second => second + 1);
  //   }, 1000)

  //   return () => clearInterval(interval)
  // }, [])

  return <p>{seconds}</p>
};

export default PracticeR;
