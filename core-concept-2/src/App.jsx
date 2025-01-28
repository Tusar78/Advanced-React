import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const counter = (data) => {
    data ? setCount((count) => count + 1) : setCount((count) => count - 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => counter(true)}>Increment</button>
      <button onClick={() => counter(false)}>Decrement</button>
    </div>
  );
};

export default App;
