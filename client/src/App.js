"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Menu_1 = __importDefault(require("./components/Menu"));
const Stake_1 = __importDefault(require("./components/Stake"));
const Presale_1 = __importDefault(require("./components/Presale"));
const Partnership_1 = __importDefault(require("./components/Partnership"));
const Airdrop_1 = __importDefault(require("./components/Airdrop"));
const Task_1 = __importDefault(require("./components/Task"));
const Invite_1 = __importDefault(require("./components/Invite"));
const howler_1 = require("howler");
const animejs_1 = __importDefault(require("animejs"));
require("./App.css");
const App = () => {
    (0, react_1.useEffect)(() => {
        const sound = new howler_1.Howl({
            src: ['assets/music/music.mp3'],
            autoplay: true,
            loop: true,
        });
        sound.play();
        (0, animejs_1.default)({
            targets: '.menu-item img',
            translateY: -10,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine',
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Menu_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/stake", element: (0, jsx_runtime_1.jsx)(Stake_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/presale", element: (0, jsx_runtime_1.jsx)(Presale_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/partnership", element: (0, jsx_runtime_1.jsx)(Partnership_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/airdrop", element: (0, jsx_runtime_1.jsx)(Airdrop_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/task", element: (0, jsx_runtime_1.jsx)(Task_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/invite", element: (0, jsx_runtime_1.jsx)(Invite_1.default, {}) })] }) }));
};
exports.default = App;
