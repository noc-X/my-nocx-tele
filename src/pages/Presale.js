import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Presale = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [presaleInfo, setPresaleInfo] = useState({});

  useEffect(() => {
    const fetchPresaleInfo = async () => {
      try {
        const res = await axios.get('/api/presale/info');
        setPresaleInfo(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPresaleInfo();
  }, []);

  const handleConnect = async () => {
    try {
      const res = await axios.post('/api/wallet/connect', { walletAddress });
      alert(res.data.msg);
    } catch (err) {
      console.error(err);
      alert('Error connecting wallet');
    }
  };

  return (
    <div>
      <h1>Presale</h1>
      <div>Countdown: {presaleInfo.countdown}</div>
      <div>Benefits: {presaleInfo.benefits}</div>
      <input
        type="text"
        placeholder="Wallet Address"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
      />
      <button onClick={handleConnect}>Connect Wallet</button>
      <button>Buy Tokens</button>
    </div>
  );
};

export default Presale;
