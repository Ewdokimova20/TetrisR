import axios from "axios";

// Создание инстанса axios
const axiosInstance = axios.create({
  baseURL: "http://yourapi.com/api", // Замените на ваш адрес API
});

// Интерцептор для добавления токена в заголовки
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Получение токена из локального хранилища
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Добавляем токен в заголовки
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Интерцептор для обработки ответов
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token"); // Очистка токена при ошибке 401
      // Здесь можно добавить логику для выхода пользователя из аккаунта
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
