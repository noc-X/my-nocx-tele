import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import './Menu.css';
const Invite = () => {
    return (_jsxs("div", { className: "page-container", children: [_jsx("h1", { children: "Invite Page" }), _jsx("p", { children: "Information about invites goes here..." }), _jsx(Link, { to: "/", className: "back-button", children: "Back" })] }));
};
export default Invite;
