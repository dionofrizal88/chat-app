import React, { useEffect, useState } from 'react';
import { getMessages } from '../services/api';

const ChatList = ({ roomId, messages }) => {

    // Check if messages is valid, if not, display a placeholder
  if (!messages || messages.length === 0) {
    return <div className="text-gray-500">No messages yet</div>;
  }
  
  return (
    <div className="space-y-4">
      {messages.map(msg => (
        <div key={msg.id} className="bg-gray-100 p-2 rounded-md">
          <strong>{msg.sender}</strong>: {msg.message}
          {msg.files && msg.files.map(file => (
            <div key={file.file_id}>
              <a href={file.base_url} target="_blank" className="text-blue-500">Download File</a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
