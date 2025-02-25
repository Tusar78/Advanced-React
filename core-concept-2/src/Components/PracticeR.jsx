import React, { useEffect, useState } from "react";

const PracticeR = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed ${count}`);
    
  }, [count])

  return (
    <div>
      <p>Hello World {count}</p>
      <button className="border rounded border-green-300 bg-green-100 text-gray-600 px-8 py-2" onClick={() => setCount(prev => prev + 1)}>Click</button>
    </div>
  )
};

export default PracticeR;
