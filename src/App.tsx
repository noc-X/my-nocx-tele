import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import anime from 'animejs';
import { Howl } from 'howler';
import Menu from './components/Menu';
import Stake from './components/Stake';
import Presale from './components/Presale';
import Partnership from './components/Partnership';
import Airdrop from './components/Airdrop';
import Task from './components/Task';
import Invite from './components/Invite';
import WalletConnect from './components/WalletConnect';
import AdminTasks from './components/AdminTasks';
import './index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Anime.js effect
    anime({
      targets: 'h1',
      translateX: 250,
      duration: 800,
    });

    // Howler.js background music
    const sound = new Howl({
      src: ['path/to/your/music.mp3'],
    });
    sound.play();
  }, []);

  return (
    <Router>
      <div>
        <h1>My Miniapp</h1>
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
      </div>
    </Router>
  );
};

export default App;
