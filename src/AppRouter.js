// AppRouter.js
import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import routes from "./routes";
import { useStores } from "./stores"; // Импортируйте ваш хук для доступа к MobX stores

const AppRouter = () => {
  const { userStore } = useStores(); // Получаем доступ к userStore
  const role = userStore.isLoggedIn ? userStore.user?.role || "user" : "guest"; // Определяем роль пользователя

  const element = useRoutes([
    ...routes[role], // Доступные маршруты для текущей роли
    { path: "*", element: <Navigate to="/" /> }, // Редирект на главную страницу для несуществующих маршрутов
  ]);

  return element;
};

export default AppRouter;
