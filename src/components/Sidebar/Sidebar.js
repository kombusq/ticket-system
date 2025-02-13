
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/main.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Support System</h3>
      <Link to="/dashboard">Tickets</Link>
      <Link to="/login">Logout</Link>
    </div>
  );
};

export default Sidebar;
    