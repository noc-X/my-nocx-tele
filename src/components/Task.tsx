import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Task: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Task Page</h1>
      <p>Information about tasks goes here...</p>
      <Link to="/" className="back-button">Back</Link>
    </div>
  );
};

export default Task;
