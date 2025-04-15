import axios from "./axiosInstance";

const UserAPI = {
  register: (userData) => {
    return axios.post("/users/register", userData);
  },

  login: (credentials) => {
    return axios.post("/users/login", credentials).then((response) => {
      localStorage.setItem("token", response.data.token); // Сохранение токена
      return response.data;
    });
  },

  getProfile: () => {
    return axios.get("/users/profile");
  },

  updateProfile: (profileData) => {
    return axios.put("/users/profile", profileData);
  },
};

export default UserAPI;
