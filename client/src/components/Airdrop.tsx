import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Airdrop: React.FC = () => {
  const [airdropInfo, setAirdropInfo] = useState<any>(null);
  const userId = 'exampleUserId'; // Replace with actual user ID

  useEffect(() => {
    const fetchAirdropInfo = async () => {
      try {
        const res = await axios.get(`https://67.205.142.211/api/airdrop/${userId}`);
        setAirdropInfo(res.data);
      } catch (error) {
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
    } catch (error) {
      console.error(error);
      alert('Failed to claim airdrop.');
    }
  };

  if (!airdropInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container">
      <h1>Airdrop Page</h1>
      <p>Points: {airdropInfo.points}</p>
      <p>Status: {airdropInfo.claimed ? 'Claimed' : 'Not Claimed'}</p>
      <p>Account Age: {airdropInfo.ageDays} days</p>
      <p>Premium Status: {airdropInfo.isPremium ? 'Premium' : 'Free'}</p>
      <button onClick={claimAirdrop} disabled={airdropInfo.claimed}>
        Claim Airdrop
      </button>
      <a href="/" className="back-button">Kembali</a>
    </div>
  );
};

export default Airdrop;
