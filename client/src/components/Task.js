import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import './Menu.css';
const Task = () => {
    return (_jsxs("div", { className: "page-container", children: [_jsx("h1", { children: "Task Page" }), _jsx("p", { children: "Information about tasks goes here..." }), _jsx(Link, { to: "/", className: "back-button", children: "Back" })] }));
};
export default Task;
