// routes.js
import Home from "./pages/Home"; // Импортируйте ваши страницы
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";

const routes = {
  guest: [
    { path: "/", element: <Home /> }, // Главная страница
    { path: "/login", element: <Login /> }, // Страница логина
    { path: "/register", element: <Register /> }, // Страница регистрации
  ],
  user: [
    { path: "/", element: <Home /> }, // Главная страница
    { path: "/dashboard", element: <Dashboard /> }, // Личная панель пользователя
  ],
  admin: [
    { path: "/", element: <Home /> }, // Главная страница
    { path: "/admin", element: <AdminPage /> }, // Страница администратора
  ],
};

export default routes;
