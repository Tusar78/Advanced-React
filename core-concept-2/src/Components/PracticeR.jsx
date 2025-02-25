import React, { useEffect, useState } from "react";

const PracticeR = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <p className="text-2xl border-b mb-2">User List {users.length}</p>
      <ul className="border p-2 space-y-1.5">
        {
          users.map(user => <li key={user.id}>{user.name}</li>)
        }
      </ul>
    </div>
  );
};

export default PracticeR;
