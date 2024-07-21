import React from 'react';
import { Link } from 'react-router-dom';

const Stake: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Stake Page</h1>
      <p>Information about staking goes here...</p>
      <Link to="/" className="back-button">Back</Link>
    </div>
  );
};

export default Stake;
