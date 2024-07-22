import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import './Menu.css';
const Menu = () => {
    return (_jsxs("div", { className: "menu-page", children: [_jsxs("div", { className: "menu-container", children: [_jsxs(Link, { to: "/stake", className: "menu-item", children: [_jsx("img", { src: "/assets/stake.png", alt: "Stake" }), _jsx("div", { className: "menu-label", children: "STAKE" })] }), _jsxs(Link, { to: "/presale", className: "menu-item", children: [_jsx("img", { src: "/assets/presale.png", alt: "Presale" }), _jsx("div", { className: "menu-label", children: "PRESALE" })] }), _jsxs(Link, { to: "/partnership", className: "menu-item", children: [_jsx("img", { src: "/assets/partnership.png", alt: "Partnership" }), _jsx("div", { className: "menu-label", children: "PARTNERSHIP" })] }), _jsxs(Link, { to: "/airdrop", className: "menu-item", children: [_jsx("img", { src: "/assets/airdrop.png", alt: "Airdrop" }), _jsx("div", { className: "menu-label", children: "AIRDROP" })] }), _jsxs(Link, { to: "/task", className: "menu-item", children: [_jsx("img", { src: "/assets/task.png", alt: "Task" }), _jsx("div", { className: "menu-label", children: "TASK" })] }), _jsxs(Link, { to: "/invite", className: "menu-item", children: [_jsx("img", { src: "/assets/invite.png", alt: "Invite" }), _jsx("div", { className: "menu-label", children: "INVITE" })] })] }), _jsxs("div", { className: "footer", children: [_jsx("a", { href: "https://t.me/yourchannel", className: "footer-button", target: "_blank", rel: "noopener noreferrer", children: "Join Channel" }), _jsx("a", { href: "https://t.me/yourgroup", className: "footer-button", target: "_blank", rel: "noopener noreferrer", children: "Join Global Chat" }), _jsx("a", { href: "https://t.me/febriatry", className: "footer-button", target: "_blank", rel: "noopener noreferrer", children: "Stay Tuned" })] })] }));
};
export default Menu;
