import React, { useState, useEffect } from "react";

const mockData = {
  users: {
    scores: [
      {
        mode: "Р1",
        nickname: "Player1",
        points: 150,
        date: "2024-01-01",
        status: "win",
      },
      {
        mode: "Р2",
        nickname: "Player2",
        points: 200,
        date: "2024-02-01",
        status: "lose",
      },
      {
        mode: "Р3",
        nickname: "Player3",
        points: 180,
        date: "2024-03-01",
        status: "win",
      },
      {
        mode: "Р4",
        nickname: "Player4",
        points: 220,
        date: "2024-04-01",
        status: "win",
      },
      {
        mode: "Р1",
        nickname: "Player5",
        points: 170,
        date: "2024-05-01",
        status: "lose",
      },
      {
        mode: "Р2",
        nickname: "Player6",
        points: 160,
        date: "2024-06-01",
        status: "win",
      },
    ],
    scoresCount: 6, // всего матчей
  },
  ratings: {
    global: 4.5,
  },
};

const UserProfile = () => {
  const [scores, setScores] = useState([]);
  const [winCount, setWinCount] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // В реальности — делайте fetch или axios-запрос к API
    const data = mockData;

    // Получаем первые 5 строк, отсортированные по убыванию points
    const sortedScores = [...data.users.scores]
      .sort((a, b) => b.points - a.points)
      .slice(0, 5);
    setScores(sortedScores);

    // Подсчет побед
    const wins = data.users.scores.filter(
      (score) => score.status === "win"
    ).length;
    setWinCount(wins);

    // Установка рейтинга
    setRating(data.ratings.global);
  }, []);

  return (
    <div className="profile-container">
      {/* Иконка и никнейм */}
      <div className="central-block">
        <svg className="icon" viewBox="0 0 448 512" width="24" title="user">
          <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
        </svg>
        <div className="nikName">nikName</div>
      </div>

      {/* Статистика */}
      <div className="stats-block">
        <div className="stat-item">
          <div className="stat-label">Матчей</div>
          <div className="stat-number">{scores.length}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Побед</div>
          <div className="stat-number">{winCount}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Рейтинг</div>
          <div className="stat-number">{rating}</div>
        </div>
      </div>

      {/* Таблица результатов */}
      <table className="results-table">
        <thead>
          <tr>
            <th>Режим</th>
            <th>Никнейм</th>
            <th>Очки</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{score.mode}</td>
              <td>{score.nickname}</td>
              <td>{score.points}</td>
              <td>{score.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserProfile;
