import React, { useEffect, useState } from "react";

const MyComponent = () => {
  useEffect(() => {
    console.log("Component Mounted! ✅");

    return () => {
      console.log("Component Unmounted! ❌");
    };
  }, []);

  return <p>Hello, I am here!</p>;
};

const MountUnmount = () => {
  const [show, setShow] = useState(false);
  return (<div>
    <div>
      {show && <MyComponent />}
    </div>
    <button className="border rounded px-6 py-2 bg-amber-300 ring-1 ring-fuchsia-300" onClick={() => setShow(!show)}>Click</button>
  </div>);
};

export default MountUnmount;
