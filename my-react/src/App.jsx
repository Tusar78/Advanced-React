import { useEffect, useState } from "react";
import "./App.css";
import User from "./Users/User";


function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  })
  
  return (
    <>
        <User user={user} />
    </>
  );
}

export default App;
