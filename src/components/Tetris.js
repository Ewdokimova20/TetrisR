// src/components/Tetris.js

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";

// Стиль контейнера и панелей (не изменяется)
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f0f0f0;
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  text-align: center;
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  text-align: center;
`;

const ScoreDisplay = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

const StyledCanvas = styled.canvas`
  border: 2px solid black;
  background-color: #fff;
`;

const Modal = styled.div`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
`;

const ModalContent = styled.div`
  background-color: #000;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 70%;
  max-width: 400px;
`;

// Сам компонент Tetris
const Tetris = () => {
  const canvasRef = useRef(null);
  const holdCanvasRef = useRef(null);
  const nextCanvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [board, setBoard] = useState(
    Array.from({ length: 20 }, () => Array(10).fill(0))
  );
  const [currentShape, setCurrentShape] = useState("I");
  const [nextShape, setNextShape] = useState("O");
  const [holdShape, setHoldShape] = useState(null);
  const [currentPosition, setCurrentPosition] = useState({ x: 4, y: 0 });
  const [isModalVisible, setModalVisible] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  // ... Функции, такие как loadImages и другие

  const saveScore = async (score) => {
    try {
      const response = await axios.post(
        "https://your-api-endpoint.com/api/statistics",
        { score }
      );
      console.log("Score saved:", response.data);
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };

  const showEndModal = () => {
    saveScore(score); // Сохраняем счёт
    setFinalScore(score); // Устанавливаем финальный счёт
    setModalVisible(true); // Показываем модальное окно
  };

  const handleRestart = () => {
    // Логика перезапуска игры
    // К примеру: сбросьте состояние игры
    setScore(0);
    setBoard(Array.from({ length: 20 }, () => Array(10).fill(0)));
    setCurrentPosition({ x: 4, y: 0 });
    setModalVisible(false); // Закрываем модальное окно
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    loadImages();

    const dropInterval = setInterval(() => {
      move(0, 1);
      update(ctx);
    }, 1000);

    return () => clearInterval(dropInterval);
  }, []);

  // ... Методы move, drawBoard, и другие функции

  return (
    <Container>
      <LeftPanel>
        <ScoreDisplay>
          Очки: <span id="score">{score}</span>
        </ScoreDisplay>
        <div>
          <p>Hold:</p>
          <StyledCanvas
            ref={holdCanvasRef}
            id="holdCanvas"
            width="100"
            height="100"
          ></StyledCanvas>
        </div>
      </LeftPanel>

      <StyledCanvas
        ref={canvasRef}
        id="tetrisCanvas"
        width="300"
        height="600"
      ></StyledCanvas>

      <RightPanel>
        <div>
          <p>Следующая фигура:</p>
          <StyledCanvas
            ref={nextCanvasRef}
            id="nextCanvas"
            width="100"
            height="100"
          ></StyledCanvas>
        </div>
      </RightPanel>

      <Modal isVisible={isModalVisible}>
        <ModalContent>
          <p>
            Игра завершена! Счёт: <span>{finalScore}</span>
          </p>
          <button onClick={handleRestart}>Начать игру заново</button>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Tetris;
