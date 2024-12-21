import React, { useState } from 'react';
import UserList from '../components/UserList';
import RoomsPage from './RoomsPage';
import { useNavigate } from 'react-router-dom';

const UsersPage = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const navigate = useNavigate();

  const handleSelectUser = (userId) => {
    setSelectedUserId(userId);
    navigate(`/rooms/${userId}`);
  };

  return (
    <div>
      <UserList onSelectUser={handleSelectUser} />
      {selectedUserId && <RoomsPage userId={selectedUserId} />}
    </div>
  );
};

export default UsersPage;
