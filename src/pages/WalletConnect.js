import React, { useState } from 'react';
import axios from 'axios';

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [telegramId, setTelegramId] = useState('');

  const handleConnect = async () => {
    try {
      const res = await axios.post('/api/wallet/connect', { telegramId, walletAddress });
      alert(res.data.msg);
    } catch (err) {
      console.error(err);
      alert('Error connecting wallet');
    }
  };

  return (
    <div>
      <h1>Connect Wallet</h1>
      <input
        type="text"
        placeholder="Telegram ID"
        value={telegramId}
        onChange={(e) => setTelegramId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Wallet Address"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
      />
      <button onClick={handleConnect}>Connect Wallet</button>
    </div>
  );
};

export default WalletConnect;
