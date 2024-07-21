import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Invite = () => {
  const [telegramId, setTelegramId] = useState('');
  const [inviteLink, setInviteLink] = useState('');
  const [invites, setInvites] = useState([]);

  useEffect(() => {
    const fetchInvites = async () => {
      try {
        const res = await axios.get(`/api/invites/${telegramId}`);
        setInvites(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (telegramId) {
      fetchInvites();
    }
  }, [telegramId]);

  const handleGenerateLink = async () => {
    try {
      const res = await axios.post('/api/invites/generate', { telegramId });
      setInviteLink(res.data.link);
    } catch (err) {
      console.error(err);
      alert('Error generating invite link');
    }
  };

  return (
    <div>
      <h1>Invite Friends</h1>
      <input
        type="text"
        placeholder="Telegram ID"
        value={telegramId}
        onChange={(e) => setTelegramId(e.target.value)}
      />
      <button onClick={handleGenerateLink}>Generate Invite Link</button>
      <div>Invite Link: {inviteLink}</div>
      <ul>
        {invites.map(invite => (
          <li key={invite._id}>
            <div>{invite.name}</div>
            <div>Status: {invite.active ? 'Active' : 'Inactive'}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Invite;
