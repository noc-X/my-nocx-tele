import React from 'react';

const Partnership: React.FC = () => {
  return (
    <div>
      <h2>Partnership</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <h3>Our Partners</h3>
      <ul>
        <li>Partner 1</li>
        <li>Partner 2</li>
      </ul>
    </div>
  );
};

export default Partnership;
