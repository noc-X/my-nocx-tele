import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Stake from './components/Stake';
import Presale from './components/Presale';
import Partnership from './components/Partnership';
import Airdrop from './components/Airdrop';
import Task from './components/Task';
import Invite from './components/Invite';
import { Howl } from 'howler';
import anime from 'animejs';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    const sound = new Howl({
      src: ['assets/music/music.mp3'],
      autoplay: true,
      loop: true,
    });

    sound.play();

    anime({
      targets: '.menu-item img',
      translateY: -10,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
    });
  }, []);

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
      </Routes>
    </Router>
  );
};

export default App;
