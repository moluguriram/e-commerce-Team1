import React from 'react';

const Profile = ({ onSignOut }) => {
  return (
    <div className="absolute top-16 right-4 bg-white shadow-md rounded-md p-4">
      <ul>
        <li className="mb-2"><button className="hover:text-gray-500 text-left w-full">Profile</button></li>
        <li className="mb-2"><button className="hover:text-gray-500 text-left w-full">Settings</button></li>
        <li>
          <button onClick={onSignOut} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Profile;