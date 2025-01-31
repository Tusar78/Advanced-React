import React from "react";

const UserForm = () => {
  return (
    <div className="mt-6 w-full max-w-4xl mx-auto px-12 border border-gray-300 rounded-xl p-7">
      <div className="flex items-center gap-4">
        <div>
          <span className="block mb-2">Name*</span>
          <input
            type="text"
            name="name"
            className="border rounded border-gray-200 w-full max-w-64 outline outline-pink-200 p-1"
          />
        </div>
        <div>
          <span className="block mb-2">Email*</span>
          <input
            type="text"
            name="name"
            className="border rounded border-gray-200 w-full max-w-64 outline outline-pink-200 p-1"
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
          />
        </div>
      </div>
      <div className="mt-4">
        <span className="block mb-2">Your Favorite Color*</span>
        <input
          type="color"
          name="date"
          id=""
          className="border rounded border-gray-200 w-full max-w-8 outline outline-pink-200 p-0.5"
        />
      </div>
      <div className="mt-4">
        <span className="block mb-2">Your Description*</span>
        <textarea
          name="description"
          id=""
          rows={4}
          className="border rounded border-gray-200 w-full max-w-64 outline outline-pink-200 p-0.5"
        ></textarea>
      </div>
      <div className="mt-4">
        <button className="px-12 py-2 bg-pink-100 border border-pink-400 text-pink-500 rounded cursor-pointer">Submit</button>
      </div>
    </div>
  );
};

export default UserForm;
