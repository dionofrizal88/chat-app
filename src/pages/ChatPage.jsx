import React, { useState, useEffect } from 'react';
import { getMessages } from '../services/api';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import ChatList from '../components/ChatList';
import MessageInput from '../components/MessageInput';

const ChatPage = () => {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const location = useLocation();
  const userId = location.state?.userId; 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await getMessages(roomId);
      setMessages(data.data[0].comments);
    };

    fetchMessages();

    // Set up an interval to fetch messages every 10 seconds
    const intervalId = setInterval(() => {
        fetchMessages();
      }, 3000);

      return () => clearInterval(intervalId);

  }, [roomId]);

  const refreshMessages = async () => {
    const data = await getMessages(roomId);
    setMessages(data.data[0].comments);
  };

  const handleBack = () => {
    navigate(`/rooms/${userId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={handleBack}
        className="mb-4 p-2 bg-gray-500 text-white rounded"
      >
        Back to Rooms
      </button>
      <h1 className="text-3xl font-bold mb-6">Chat Room</h1>
      <ChatList roomId={roomId} messages={messages} />
      <MessageInput roomId={roomId} userId={userId} refreshMessages={refreshMessages} />
    </div>
  );
};

export default ChatPage;
