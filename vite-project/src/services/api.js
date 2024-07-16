// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Ajusta la URL según donde se ejecuta json-server

export const getVideos = async () => {
  try {
    const response = await axios.get(`${API_URL}/videos`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addVideo = async (nuevoVideo) => {
  try {
    const response = await axios.post(`${API_URL}/videos`, nuevoVideo);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteVideo = async (videoId) => {
  try {
    const response = await axios.delete(`${API_URL}/videos/${videoId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateVideo = async (videoId, updatedVideo) => {
  try {
    const response = await axios.put(`${API_URL}/videos/${videoId}`, updatedVideo);
    return response.data;
  } catch (error) {
    throw error;
  }
};
