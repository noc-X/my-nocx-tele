import React, { useState, useEffect } from 'react';

interface PresaleInfo {
  countdown: string;
  benefits: string;
}

const Presale: React.FC = () => {
  const [presaleInfo, setPresaleInfo] = useState<PresaleInfo>({ countdown: '', benefits: '' });

  useEffect(() => {
    // Fetch presale info from API
    setPresaleInfo({
      countdown: 'Countdown data from API',
      benefits: 'Benefits data from API',
    });
  }, []);

  return (
    <div>
      <h2>Presale</h2>
      <div>Countdown: {presaleInfo.countdown}</div>
      <div>Benefits: {presaleInfo.benefits}</div>
      <button>Connect Wallet</button>
      <button>Buy Tokens</button>
    </div>
  );
};

export default Presale;
