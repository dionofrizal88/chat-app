import React, { useEffect, useState } from 'react';
import { getRooms } from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';

const RoomsPage = () => {
  const { userId } = useParams();
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const [stateUserId, setStateUserId] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const data = await getRooms(userId);
      setRooms(data.data);
    };

    fetchRooms();
  }, [userId]);

  const handleSelectRoom = (roomId, userId) => {
    setStateUserId(userId);
    navigate(`/chat/${roomId}`, { state: { userId: userId } });
  };

  const handleBack = () => {
    navigate(`/`);
  };

  return (
    <div className="container mx-auto p-4">
        <button
        onClick={handleBack}
        className="mb-4 p-2 bg-gray-500 text-white rounded"
      >
        Back to Rooms
      </button>

      <h1 className="text-3xl font-bold mb-6">Rooms</h1>
      <ul>
        {rooms.map(room => (
          <li key={room.room.id} className="mb-2 cursor-pointer" onClick={() => handleSelectRoom(room.room.id, userId)}>
            {room.room.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomsPage;
