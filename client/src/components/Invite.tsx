import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Invite: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Invite Page</h1>
      <p>Information about invites goes here...</p>
      <Link to="/" className="back-button">Back</Link>
    </div>
  );
};

export default Invite;
