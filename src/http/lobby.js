import axios from "./axiosInstance";

const LobbyAPI = {
  createRoom: (roomData) => {
    return axios.post("/lobby/create", roomData);
  },

  joinRoom: (roomId) => {
    return axios.post(`/lobby/join/${roomId}`);
  },

  leaveRoom: (roomId) => {
    return axios.post(`/lobby/leave/${roomId}`);
  },

  getRoomDetails: (roomId) => {
    return axios.get(`/lobby/${roomId}`);
  },
};

export default LobbyAPI;
