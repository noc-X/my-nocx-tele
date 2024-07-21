import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu: React.FC = () => {
  return (
    <div className="menu-container">
      <div className="row">
        <Link to="/stake" className="menu-item">
          <img src="/assets/stake.png" alt="Stake" />
          <div className="menu-label">STAKE</div>
        </Link>
        <Link to="/presale" className="menu-item">
          <img src="/assets/presale.png" alt="Presale" />
          <div className="menu-label">PRESALE</div>
        </Link>
      </div>
      <div className="row">
        <Link to="/partnership" className="menu-item">
          <img src="/assets/partnership.png" alt="Partnership" />
          <div className="menu-label">PARTNERSHIP</div>
        </Link>
        <Link to="/airdrop" className="menu-item">
          <img src="/assets/airdrop.png" alt="Airdrop" />
          <div className="menu-label">AIRDROP</div>
        </Link>
      </div>
      <div className="row">
        <Link to="/task" className="menu-item">
          <img src="/assets/task.png" alt="Task" />
          <div className="menu-label">TASK</div>
        </Link>
        <Link to="/invite" className="menu-item">
          <img src="/assets/invite.png" alt="Invite" />
          <div className="menu-label">INVITE</div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
