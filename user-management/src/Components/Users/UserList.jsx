import React, { useEffect, useState } from "react";
import User from "./User";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [filteredAge, setfilteredAge] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=20");
    const data = await response.json();
    setUsers(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (data) => {
    const newData = users.filter((user) => user.name.first === data);
    console.log(newData);
    setfilteredData(newData);
  };

  const handleAge = (age) => {
    let newData;
    if (age >= "30+") {
      newData = users.filter((user) => user.registered.age >= 30);
    } else if (age >= "20+") {
      newData = users.filter((user) => user.registered.age >= 20);
    } else if (age >= "10+") {
      newData = users.filter(
        (user) => user.registered.age <= 20 && user.registered.age >= 10
      );
    } else if (age >= "10") {
      newData = users.filter((user) => user.registered.age <= 10);
    } else {
      newData = users.filter((user) => user.registered.age > 0);
    }
    setfilteredAge(newData);
    console.log(age);
  };

  console.log(filteredData);

  if (loading) return <p>Loading ....</p>;

  return (
    <div className="m-4">
      <div className="mb-2 flex justify-between">
        <input
          onChange={(e) => handleSearch(e.target.value)}
          className="border px-3 py-1.5 rounded"
          type="text"
          placeholder="Type your Name"
        />

        <select
          onChange={(e) => handleAge(e.target.value)}
          className="border rounded"
          name=""
          id=""
        >
          <option value="all">Select</option>
          <option value="10">Zero To 10</option>
          <option value="10+">Bigger Than 10</option>
          <option value="20+">Bigger Than 20</option>
          <option value="30+">Bigger Than 30</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {filteredData.length > 0
          ? filteredData.map((user) => <User key={user.id} user={user} />)
          : filteredAge.length > 0
          ? filteredAge.map((user) => <User key={user.id} user={user} />)
          : users.map((user) => <User key={user.id} user={user} />)}
      </div>
    </div>
  );
};

export default UserList;
