import React from 'react';
import { Link } from 'react-router-dom';

const Presale: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Presale Page</h1>
      <p>Information about presale goes here...</p>
      <Link to="/" className="back-button">Back</Link>
    </div>
  );
};

export default Presale;
