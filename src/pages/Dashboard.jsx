// src/pages/Dashboard.jsx
import React from 'react';
import { Routes, Route, Link, useMatch } from 'react-router-dom';

const Profile = () => <div><h3>Profile Page</h3></div>;
const Settings = () => <div><h3>Settings Page</h3></div>;

const Dashboard = () => {
    const match = useMatch("/dashboard/*");
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to={`${match.url}/profile`}>Profile</Link>
        </li>
        <li>
          <Link to={`${match.url}/settings`}>Settings</Link>
        </li>
      </ul>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="/" element={<div><h3>Please select an option.</h3></div>} />
      </Routes>
    </div>
  );
};

export default Dashboard;
