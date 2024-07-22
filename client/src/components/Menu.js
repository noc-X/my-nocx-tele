"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
require("./Menu.css");
const Menu = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "menu-page", children: [(0, jsx_runtime_1.jsxs)("div", { className: "menu-container", children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/stake", className: "menu-item", children: [(0, jsx_runtime_1.jsx)("img", { src: "/assets/stake.png", alt: "Stake" }), (0, jsx_runtime_1.jsx)("div", { className: "menu-label", children: "STAKE" })] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/presale", className: "menu-item", children: [(0, jsx_runtime_1.jsx)("img", { src: "/assets/presale.png", alt: "Presale" }), (0, jsx_runtime_1.jsx)("div", { className: "menu-label", children: "PRESALE" })] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/partnership", className: "menu-item", children: [(0, jsx_runtime_1.jsx)("img", { src: "/assets/partnership.png", alt: "Partnership" }), (0, jsx_runtime_1.jsx)("div", { className: "menu-label", children: "PARTNERSHIP" })] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/airdrop", className: "menu-item", children: [(0, jsx_runtime_1.jsx)("img", { src: "/assets/airdrop.png", alt: "Airdrop" }), (0, jsx_runtime_1.jsx)("div", { className: "menu-label", children: "AIRDROP" })] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/task", className: "menu-item", children: [(0, jsx_runtime_1.jsx)("img", { src: "/assets/task.png", alt: "Task" }), (0, jsx_runtime_1.jsx)("div", { className: "menu-label", children: "TASK" })] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/invite", className: "menu-item", children: [(0, jsx_runtime_1.jsx)("img", { src: "/assets/invite.png", alt: "Invite" }), (0, jsx_runtime_1.jsx)("div", { className: "menu-label", children: "INVITE" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "footer", children: [(0, jsx_runtime_1.jsx)("a", { href: "https://t.me/yourchannel", className: "footer-button", target: "_blank", rel: "noopener noreferrer", children: "Join Channel" }), (0, jsx_runtime_1.jsx)("a", { href: "https://t.me/yourgroup", className: "footer-button", target: "_blank", rel: "noopener noreferrer", children: "Join Global Chat" }), (0, jsx_runtime_1.jsx)("a", { href: "https://t.me/febriatry", className: "footer-button", target: "_blank", rel: "noopener noreferrer", children: "Stay Tuned" })] })] }));
};
exports.default = Menu;
