import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
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
const App = () => {
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
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Menu, {}) }), _jsx(Route, { path: "/stake", element: _jsx(Stake, {}) }), _jsx(Route, { path: "/presale", element: _jsx(Presale, {}) }), _jsx(Route, { path: "/partnership", element: _jsx(Partnership, {}) }), _jsx(Route, { path: "/airdrop", element: _jsx(Airdrop, {}) }), _jsx(Route, { path: "/task", element: _jsx(Task, {}) }), _jsx(Route, { path: "/invite", element: _jsx(Invite, {}) })] }) }));
};
export default App;
