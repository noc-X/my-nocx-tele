import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Airdrop: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Airdrop Page</h1>
      <p>Information about airdrop goes here...</p>
      <Link to="/" className="back-button">Bakc</Link>
    </div>
  );
};

export default Airdrop;
