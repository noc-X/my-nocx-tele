"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
require("./Menu.css");
const Partnership = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "page-container", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Partnership Page" }), (0, jsx_runtime_1.jsx)("p", { children: "Information about partnership goes here..." }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "back-button", children: "Back" })] }));
};
exports.default = Partnership;
