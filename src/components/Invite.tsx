import React, { useState, useEffect } from 'react';

interface Invite {
  _id: string;
  name: string;
  active: boolean;
}

const Invite: React.FC = () => {
  const [invites, setInvites] = useState<Invite[]>([]);

  useEffect(() => {
    // Fetch invite data from API
    setInvites([
      { _id: '1', name: 'Friend 1', active: true },
      { _id: '2', name: 'Friend 2', active: false },
    ]);
  }, []);

  return (
    <div>
      <h2>Invite</h2>
      <ul>
        {invites.map((invite) => (
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
