import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <Link to="/stake">
        <div className="menu-item">
          <img src="/assets/stake.png" alt="Stake" />
          <div className="menu-title">STAKE</div>
        </div>
      </Link>
      <Link to="/presale">
        <div className="menu-item">
          <img src="/assets/presale.png" alt="Presale" />
          <div className="menu-title">PRESALE</div>
        </div>
      </Link>
      <Link to="/partnership">
        <div className="menu-item">
          <img src="\assets\partnership.png" alt="Partnership" />
          <div className="menu-title">PARTNERSHIP</div>
        </div>
      </Link>
      <Link to="/airdrop">
        <div className="menu-item">
          <img src="/assets/airdrop.png" alt="Airdrop" />
          <div className="menu-title">AIRDROP</div>
        </div>
      </Link>
      <Link to="/task">
        <div className="menu-item">
          <img src="/assets/task.png" alt="Task" />
          <div className="menu-title">TASK</div>
        </div>
      </Link>
      <Link to="/invite">
        <div className="menu-item">
          <img src="/assets/invite.png" alt="Invite" />
          <div className="menu-title">INVITE</div>
        </div>
      </Link>
      <div className="footer">
        <a href="https://t.me/yourchannel" className="footer-button" target="_blank" rel="noopener noreferrer">Join Channel</a>
        <a href="https://t.me/yourgroup" className="footer-button" target="_blank" rel="noopener noreferrer">Join Global Chat</a>
        <a href="https://t.me/febriatry" className="footer-button" target="_blank" rel="noopener noreferrer">Stay Tuned</a>
      </div>
    </div>
  );
};

export default Menu;
