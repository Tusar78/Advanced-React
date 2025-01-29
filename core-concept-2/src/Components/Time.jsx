import React, { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const seconds = setInterval(() => {
      setTime(time => time + 1)
    }, 1000);

    return () => clearInterval(seconds);
  }, [time]);
  return <p>Seconds: {time}</p>
};

export default Time;
