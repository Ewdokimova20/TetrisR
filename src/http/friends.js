import axios from "./axiosInstance";

const FriendsAPI = {
  addFriend: (friendId) => {
    return axios.post(`/friends/add/${friendId}`);
  },

  removeFriend: (friendId) => {
    return axios.delete(`/friends/remove/${friendId}`);
  },

  getFriendsList: () => {
    return axios.get("/friends/list");
  },
};

export default FriendsAPI;
