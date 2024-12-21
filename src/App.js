import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import RoomsPage from './pages/RoomsPage';
import ChatPage from './pages/ChatPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/rooms/:userId" element={<RoomsPage />} />
          <Route path="/chat/:roomId" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
