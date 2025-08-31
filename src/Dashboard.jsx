import React, { useState } from 'react';
import Profile from './Profile';

const Dashboard = ({ onSignOut }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const departments = [
    'Sales',
    'Marketing',
    'Engineering',
    'Human Resources'
  ];

  const filteredDepartments = departments.filter(dept =>
    dept.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-2xl font-bold mb-10">Departments</h2>
        <input
          type="text"
          placeholder="Search departments..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="mb-5 p-2 w-full rounded text-black bg-white border border-gray-300"
        />
        <ul>
          {filteredDepartments.map(dept => (
            <li className="mb-4" key={dept}>
              <button className="hover:text-gray-300 text-left w-full">{dept}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow-md p-4 flex justify-end">
          <div className="relative">
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Profile
            </button>
            {showProfile && <Profile onSignOut={onSignOut} />}
          </div>
        </div>
        <div className="p-10">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
