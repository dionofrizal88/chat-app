import React, { useState, useRef } from 'react';
import { sendMessage } from '../services/api';

const MessageInput = ({ roomId, userId, refreshMessages }) => {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null); // Create a reference to the file input

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(message, roomId, userId, files);
      setMessage('');
      setFiles([]);

    // Reset the file input field to blank using the ref
    if (fileInputRef.current) {
        fileInputRef.current.value = ''; // This resets the file input
    }

      await refreshMessages();
    } catch (error) {
      console.error('Failed to send message', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4 mt-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded"
        placeholder="Type a message"
        required
      />
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        ref={fileInputRef}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Send
      </button>
    </form>
  );
};

export default MessageInput;
