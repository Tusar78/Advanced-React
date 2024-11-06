import { useEffect, useState } from "react";
import "./App.css";
import User from "./Users/User";

function App() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <>
      <User load={isLoading} user={user} />
    </>
  );
}

export default App;
