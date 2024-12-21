import axios from 'axios';

const API_URL = 'http://localhost:8181'; // ganti dengan URL API Golang Anda

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users", error);
    throw error;
  }
};

export const getRooms = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/rooms/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching rooms', error);
      throw error;
    }
  };
  
  

export const getMessages = async (roomId) => {
  try {
    const response = await axios.get(`${API_URL}/rooms/messages/detail/${roomId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching messages", error);
    throw error;
  }
};

export const sendMessage = async (message, roomId, userId, files) => {
  
    const filesArray = Array.isArray(files) ? files : Array.from(files);
  const formData = new FormData();
  formData.append('message', message);
  formData.append('room_id', roomId);
  formData.append('user_id', userId);
  filesArray.forEach((file, index) => {
    formData.append(`files[${index}]`, file);
  });

  try {
    const response = await axios.post(`${API_URL}/rooms/messages/send`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message", error);
    throw error;
  }
};
