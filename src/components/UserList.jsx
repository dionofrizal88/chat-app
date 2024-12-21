import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data.data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className="mb-2 cursor-pointer" onClick={() => onSelectUser(user.id)}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
