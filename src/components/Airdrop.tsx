import React, { useState, useEffect } from 'react';

interface AirdropInfo {
  activity: string;
  progress: string;
}

const Airdrop: React.FC = () => {
  const [airdropInfo, setAirdropInfo] = useState<AirdropInfo>({ activity: '', progress: '' });

  useEffect(() => {
    // Fetch airdrop info from API
    setAirdropInfo({
      activity: 'Activity data from API',
      progress: 'Progress data from API',
    });
  }, []);

  return (
    <div>
      <h2>Airdrop</h2>
      <div>Activity History: {airdropInfo.activity}</div>
      <div>Airdrop Progress: {airdropInfo.progress}</div>
      <button>Claim Airdrop</button>
    </div>
  );
};

export default Airdrop;
