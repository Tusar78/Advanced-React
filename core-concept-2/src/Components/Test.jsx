import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    console.log("I am Mounted");

    return () => {
      console.log("I am unmounted");
    };
  }, []);

  return <p>Hello Test Component</p>
};

export default Test;
