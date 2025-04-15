import axios from "./axiosInstance";

const StatisticsAPI = {
  getUserStats: () => {
    return axios.get("/statistics/user");
  },

  getGlobalStats: () => {
    return axios.get("/statistics/global");
  },
};

export default StatisticsAPI;
