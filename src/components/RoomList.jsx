import React, { useEffect, useState } from 'react';
import { getRooms } from '../services/api';

const RoomList = ({ userId, onSelectRoom }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (userId) {
      const fetchRooms = async () => {
        const data = await getRooms(userId);
        setRooms(data.data);
      };

      fetchRooms();
    }
  }, [userId]);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Rooms</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.room.id} className="mb-2 cursor-pointer" onClick={() => onSelectRoom(room.room.id)}>
            {room.room.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
