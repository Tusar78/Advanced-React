import React, { useState } from "react";

const UserForm = ({ theme }) => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [date, setDate] = useState("");
  // const [color, setColor] = useState("");
  // const [description, setDescription] = useState("");

  // const handleForm = (e) => {
  //   e.preventDefault();

  //   console.log(
  //     `Name: ${name}, Email: ${email}, subject: ${subject}, date: ${color}, Description: ${description}`
  //   );

  //   console.log(user);
  // };

  console.log(theme.color);

  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    date: "",
    color: "",
    description: "",
  });

  const updateUser = (e) => {
    e.preventDefault();

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    console.log(
      `Name: ${user.name}, Email: ${user.email}, subject: ${user.subject}, date: ${user.color}, Description: ${user.description}`
    );
  };

  return (
    <div className="mt-6 w-full max-w-4xl mx-auto px-8 border rounded-xl p-7 flex gap-6 bg-white">
      <form className="w-full" onSubmit={updateUser}>
        <div className="flex items-center gap-4 w-full">
          <div>
            <span className="block mb-2">Name*</span>
            <input
              type="text"
              name="name"
              className="border rounded border-gray-200 w-full max-w-64 outline outline-pink-200 p-1"
              onChange={updateUser}
            />
          </div>
          <div>
            <span className="block mb-2">Email*</span>
            <input
              type="text"
              name="email"
              className="border rounded border-gray-200 w-full max-w-64 outline outline-pink-200 p-1"
              onChange={updateUser}
            />
          </div>
        </div>
        <div className="flex items-center mt-4 gap-4">
          <div>
            <span className="block mb-2">Subject*</span>
            <select
              name="subject"
              id=""
              className="border rounded border-gray-200 w-full max-w-64 outline outline-pink-200 p-1"
              onChange={updateUser}
            >
              <option value="English">English</option>
              <option value="Bangla">Bangla</option>
              <option value="Arbi">Arbi</option>
            </select>
          </div>
          <div>
            <span className="block mb-2">Date*</span>
            <input
              type="date"
              name="date"
              id=""
              className="border rounded border-gray-200 w-full max-w-64 outline outline-pink-200 p-1"
              onChange={updateUser}
            />
          </div>
        </div>
        <div className="mt-4">
          <span className="block mb-2">Your Favorite Color*</span>
          <input
            type="color"
            name="color"
            id=""
            className="border rounded border-gray-200 w-full max-w-8 outline outline-pink-200 p-0.5"
            onChange={updateUser}
          />
        </div>
        <div className="mt-4">
          <span className="block mb-2">Your Description*</span>
          <textarea
            name="description"
            id=""
            rows={4}
            className="border rounded border-gray-200 w-full max-w-64 outline outline-pink-200 p-0.5"
            onChange={updateUser}
          ></textarea>
        </div>
        <div className="mt-4">
          <button className="px-12 py-2 bg-pink-100 border border-pink-400 text-pink-500 rounded cursor-pointer">
            Submit
          </button>
        </div>
      </form>
      <div className="w-full border border-gray-200 py-4 px-6 flex flex-col gap-4 rounded-2xl shadow-2xl">
        <p>Your Name: {user.name}</p>
        <p>Your Email: {user.email}</p>
        <p>subject: {user.subject}</p>
        <p>Date: {user.date}</p>
        <p>Favorite Color: {user.color}</p>
        <p>Description: {user.description}</p>
      </div>
    </div>
  );
};

export default UserForm;
