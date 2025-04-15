import axios from "./axiosInstance";

const GameAPI = {
  startGame: (roomId) => {
    return axios.post(`/games/start/${roomId}`);
  },

  makeMove: (moveData) => {
    return axios.post("/games/move", moveData);
  },

  endGame: (gameId) => {
    return axios.post(`/games/end/${gameId}`);
  },
};

export default GameAPI;
