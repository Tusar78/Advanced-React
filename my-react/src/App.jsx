import { useEffect, useState } from "react";
import "./App.css";
import User from "./Users/User";

function App() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/user")
      .then((res) => {
        if (!res.ok) {
          throw Error("This is error");
        } else {
          return res.json()
        }
      })
      .then((data) => {
        setUser(data);
        setIsLoading(false);
        setError(null)
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false)
      })
  }, []);

  return (
    <>
      <User error={error} load={isLoading} user={user} />
    </>
  );
}

export default App;
