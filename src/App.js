import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Stake from './pages/Stake';
import Presale from './pages/Presale';
import Partnership from './pages/Partnership';
import Airdrop from './pages/Airdrop';
import Task from './pages/Task';
import Invite from './pages/Invite';
import WalletConnect from './pages/WalletConnect';
import AdminTasks from './pages/AdminTasks';

import anime from 'animejs';

useEffect(() => {
  anime({
    targets: '.menu-item',
    translateY: [10, 0],
    duration: 1000,
    delay: anime.stagger(100),
    easing: 'easeOutElastic(1, .8)',
    loop: true,
    direction: 'alternate'
  });
}, []);

import { Howl } from 'howler';

const backgroundMusic = new Howl({
  src: ['path_to_background_music.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.5
});

useEffect(() => {
  backgroundMusic.play();

  return () => {
    backgroundMusic.stop();
  };
}, []);


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/stake" component={Stake} />
        <Route path="/presale" component={Presale} />
        <Route path="/partnership" component={Partnership} />
        <Route path="/airdrop" component={Airdrop} />
        <Route path="/task" component={Task} />
        <Route path="/invite" component={Invite} />
        <Route path="/wallet-connect" component={WalletConnect} />
        <Route path="/admin/tasks" component={AdminTasks} />
      </Switch>
    </Router>
  );
}

export default App;
