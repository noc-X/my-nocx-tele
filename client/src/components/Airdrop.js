"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const Airdrop = () => {
    const [airdropInfo, setAirdropInfo] = (0, react_1.useState)(null);
    const userId = 'exampleUserId'; // Replace with actual user ID
    (0, react_1.useEffect)(() => {
        const fetchAirdropInfo = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default.get(`https://67.205.142.211/api/airdrop/${userId}`);
                setAirdropInfo(res.data);
            }
            catch (error) {
                console.error(error);
            }
        });
        fetchAirdropInfo();
    }, [userId]);
    const claimAirdrop = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = yield axios_1.default.post(`https://67.205.142.211/api/airdrop/claim/${userId}`);
            alert(res.data.msg);
            setAirdropInfo(Object.assign(Object.assign({}, airdropInfo), { claimed: true }));
        }
        catch (error) {
            console.error(error);
            alert('Failed to claim airdrop.');
        }
    });
    if (!airdropInfo) {
        return (0, jsx_runtime_1.jsx)("div", { children: "Loading..." });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "page-container", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Airdrop Page" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Points: ", airdropInfo.points] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Status: ", airdropInfo.claimed ? 'Claimed' : 'Not Claimed'] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Account Age: ", airdropInfo.ageDays, " days"] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Premium Status: ", airdropInfo.isPremium ? 'Premium' : 'Free'] }), (0, jsx_runtime_1.jsx)("button", { onClick: claimAirdrop, disabled: airdropInfo.claimed, children: "Claim Airdrop" }), (0, jsx_runtime_1.jsx)("a", { href: "/", className: "back-button", children: "Kembali" })] }));
};
exports.default = Airdrop;
