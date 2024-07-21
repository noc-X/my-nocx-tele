import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Airdrop = () => {
  const [telegramId, setTelegramId] = useState('');
  const [airdropInfo, setAirdropInfo] = useState({});

  useEffect(() => {
    const fetchAirdropInfo = async () => {
      try {
        const res = await axios.get(`/api/airdrop/${telegramId}`);
        setAirdropInfo(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (telegramId) {
      fetchAirdropInfo();
    }
  }, [telegramId]);

  const handleClaim = async () => {
    try {
      const res = await axios.post('/api/airdrop/claim', { telegramId });
      alert(res.data.msg);
    } catch (err) {
      console.error(err);
      alert('Error claiming airdrop');
    }
  };

  return (
    <div>
      <h1>Airdrop</h1>
      <input
        type="text"
        placeholder="Telegram ID"
        value={telegramId}
        onChange={(e) => setTelegramId(e.target.value)}
      />
      <div>Activity History: {airdropInfo.activity}</div>
      <div>Airdrop Progress: {airdropInfo.progress}</div>
      <button onClick={handleClaim}>Claim Airdrop</button>
    </div>
  );
};

export default Airdrop;
