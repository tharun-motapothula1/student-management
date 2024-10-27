// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="text-center mt-5">
      <h2>Welcome to the Student Management Portal</h2>
      <p>
        <Link to="/register" className="btn btn-primary m-2">Register New Student</Link>
        <Link to="/students" className="btn btn-secondary m-2">View Student List</Link>
      </p>
    </div>
  );
};

export default Dashboard;
