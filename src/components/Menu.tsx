import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu: React.FC = () => {
  return (
    <div className="menu-container">
      <Link to="/stake">
        <div className="menu-item">
          <img src="/assets/stake.png" alt="Stake" />
          <div className="menu-label">STAKE</div>
        </div>
      </Link>
      <Link to="/presale">
        <div className="menu-item">
          <img src="/assets/presale.png" alt="Presale" />
          <div className="menu-label">PRESALE</div>
        </div>
      </Link>
      <Link to="/partnership">
        <div className="menu-item">
          <img src="/assets/partnership.png" alt="Partnership" />
          <div className="menu-label">PARTNERSHIP</div>
        </div>
      </Link>
      <Link to="/airdrop">
        <div className="menu-item">
          <img src="/assets/airdrop.png" alt="Airdrop" />
          <div className="menu-label">AIRDROP</div>
        </div>
      </Link>
      <Link to="/task">
        <div className="menu-item">
          <img src="/assets/task.png" alt="Task" />
          <div className="menu-label">TASK</div>
        </div>
      </Link>
      <Link to="/invite">
        <div className="menu-item">
          <img src="/assets/invite.png" alt="Invite" />
          <div className="menu-label">INVITE</div>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
