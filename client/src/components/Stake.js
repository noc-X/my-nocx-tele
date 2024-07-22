import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const Stake = () => {
    return (_jsxs("div", { className: "page-container", children: [_jsx("h1", { children: "Stake Page" }), _jsx("p", { children: "Information about staking goes here..." }), _jsx(Link, { to: "/", className: "back-button", children: "Back" })] }));
};
export default Stake;
