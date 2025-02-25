import React, { useState } from "react";

const UserProfile = ({ user }) => {
  const [color, setColor] = useState('#ffffff')
  return (
    <div className="border border-gray-200 rounded shadow px-2 py-4" style={{background: color}}>
      <div className="w-12 h-12 border border-gray-200 rounded-full overflow-hidden m-auto">
        <img className="w-full h-full" src={user.profile} alt="user profile" />
      </div>

      <div className="text-center mt-4 space-y-1.5">
        <h2 className="uppercase text-sm font-semibold">{user.name}</h2>
        <p className="text-xs">{user.age > 18 ? user.age : <span className="text-red-500">Underage</span>}</p>
        <p className="text-xs">{user.location}</p>

        <button onClick={() => setColor(user.color)} className="border text-xs px-2.5 py-1.5 rounded mt-3 cursor-pointer">Change Bg</button>
      </div>
    </div>
  );
};

export default UserProfile;


// #f2e6ff