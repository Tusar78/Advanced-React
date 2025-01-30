import React, { useEffect, useState } from "react";
import Time from "./Components/Time";
import Resize from "./Components/Resize";
import Test from "./Components/Test";

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Time />
      <Resize />
      
      <button onClick={() => setToggle(!toggle)}>Click to show</button>
      <p>
        {
          toggle && <Test />
        }
      </p>
    </div>
  );
};

export default App;
