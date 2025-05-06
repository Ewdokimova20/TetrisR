import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Стили для модального окна
const Modal = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalContent = styled.div`
  background-color: #000;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 70%;
  max-width: 400px;
  text-align: center;
  color: #fff;
  border-radius: 10px;
`;

// Основной компонент
const PauseModal = ({ isOpen, onClose }) => {
  // Обработчик клавиши 'R' для закрытия модального окна
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === "r") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <Modal visible={isOpen}>
      <ModalContent>
        <h2>Пауза</h2>
        <button onClick={onClose}>Продолжить игру</button>
        <br />
        <span>или нажав на Р</span>
      </ModalContent>
    </Modal>
  );
};

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // Пример вызова по 'P'
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === "p") {
        showModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>Пример интеграции модального окна</h1>
      <button onClick={showModal}>Открыть паузу</button>
      <PauseModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
