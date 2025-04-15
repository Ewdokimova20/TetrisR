// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Импортируем компонент Home
import RegistrationForm from "./components/RegistrationForm"; // Если используете отдельно
import './styles.css'; // Импортируйте файл стилей

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Главная страница */}
        <Route path="/register" element={<RegistrationForm />} />{" "}
        {/* Страница регистрации */}
      </Routes>
    </Router>
  );
};

export default App;
