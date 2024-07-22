import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Partnership: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Partnership Page</h1>
      <p>Information about partnership goes here...</p>
      <Link to="/" className="back-button">Back</Link>
    </div>
  );
};

export default Partnership;