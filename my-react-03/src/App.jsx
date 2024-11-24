import React, { useEffect, useState } from "react";

const App = () => {
  const [laptop, setLaptop] = useState([]);

  useEffect(() => {
    fetch("laptop.json")
      .then((res) => res.json())
      .then((data) => setLaptop(data));
  }, []);

  return (
    <>
      {laptop.map((lp) => (
        <div key={lp.id}>
          <p>Model: {lp.model}</p>
        </div>
      ))}
    </>
  );
};

export default App;
