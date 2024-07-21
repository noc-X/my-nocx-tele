import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; // Buat file ini untuk styling khusus Menu

const Menu = () => {
  return (
    <div className="menu-container">
      <Link to="/stake">
        <div className="menu-item">
          <img src="./assets/stake.png" alt="Stake" />
          <div>STAKE</div>
        </div>
      </Link>
      <Link to="/presale">
        <div className="menu-item">
          <img src="./assets/presale.png" alt="Presale" />
          <div>PRESALE</div>
        </div>
      </Link>
      <Link to="/partnership">
        <div className="menu-item">
          <img src="./assets/patner.png" alt="Partnership" />
          <div>PARTNERSHIP</div>
        </div>
      </Link>
      <Link to="/airdrop">
        <div className="menu-item">
          <img src="./assets/airdrop.png" alt="Airdrop" />
          <div>AIRDROP</div>
        </div>
      </Link>
      <Link to="/task">
        <div className="menu-item">
          <img src="task.png" alt="Task" />
          <div>TASK</div>
        </div>
      </Link>
      <Link to="/invite">
        <div className="menu-item">
          <img src="invite.png" alt="Invite" />
          <div>INVITE</div>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
