import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import Home from "./pages/Home";
import Tetris from "./components/Tetris"; // Импортируем компонент Tetris

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/tetris" element={<Tetris />} /> // Предоставляем доступ к
        Тетрису
      </Routes>
    </Router>
  );
};

export default App;
