import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const Presale = () => {
    return (_jsxs("div", { className: "page-container", children: [_jsx("h1", { children: "Presale Page" }), _jsx("p", { children: "Information about presale goes here..." }), _jsx(Link, { to: "/", className: "back-button", children: "Back" })] }));
};
export default Presale;
