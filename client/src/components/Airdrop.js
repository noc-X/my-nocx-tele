import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import axios from 'axios';
const Airdrop = () => {
    const [airdropInfo, setAirdropInfo] = useState(null);
    const userId = 'exampleUserId'; // Replace with actual user ID
    useEffect(() => {
        const fetchAirdropInfo = async () => {
            try {
                const res = await axios.get(`https://67.205.142.211/api/airdrop/${userId}`);
                setAirdropInfo(res.data);
            }
            catch (error) {
                console.error(error);
            }
        };
        fetchAirdropInfo();
    }, [userId]);
    const claimAirdrop = async () => {
        try {
            const res = await axios.post(`https://67.205.142.211/api/airdrop/claim/${userId}`);
            alert(res.data.msg);
            setAirdropInfo({ ...airdropInfo, claimed: true });
        }
        catch (error) {
            console.error(error);
            alert('Failed to claim airdrop.');
        }
    };
    if (!airdropInfo) {
        return _jsx("div", { children: "Loading..." });
    }
    return (_jsxs("div", { className: "page-container", children: [_jsx("h1", { children: "Airdrop Page" }), _jsxs("p", { children: ["Points: ", airdropInfo.points] }), _jsxs("p", { children: ["Status: ", airdropInfo.claimed ? 'Claimed' : 'Not Claimed'] }), _jsxs("p", { children: ["Account Age: ", airdropInfo.ageDays, " days"] }), _jsxs("p", { children: ["Premium Status: ", airdropInfo.isPremium ? 'Premium' : 'Free'] }), _jsx("button", { onClick: claimAirdrop, disabled: airdropInfo.claimed, children: "Claim Airdrop" }), _jsx("a", { href: "/", className: "back-button", children: "Kembali" })] }));
};
export default Airdrop;
