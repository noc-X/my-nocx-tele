import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Airdrop from './components/Airdrop';
import Stake from './components/Stake';
import Presale from './components/Presale';
import Partnership from './components/Partnership';
import Task from './components/Task';
import Invite from './components/Invite';
import WalletConnect from './components/WalletConnect';
import AdminTasks from './components/AdminTasks';
import Menu from './components/Menu';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/stake" element={<Stake />} />
        <Route path="/presale" element={<Presale />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/airdrop" element={<Airdrop />} />
        <Route path="/task" element={<Task />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/wallet-connect" element={<WalletConnect />} />
        <Route path="/admin/tasks" element={<AdminTasks />} />
      </Routes>
    </Router>
  );
};

export default App;
