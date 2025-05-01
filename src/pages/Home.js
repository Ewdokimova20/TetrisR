// src/components/Home.js
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const sectionsData = [
  { id: 1, text: "Раздел 1", icon: "img/info/comments.svg" },
  { id: 2, text: "Раздел 2", icon: "img/info/list.svg" },
  { id: 3, text: "Раздел 3", icon: "img/info/info.svg" },
  { id: 4, text: "Раздел 4", icon: "img/info/versions.svg" },
];

const [selectedSectionId, setSelectedSectionId] = useState(1);

const handleSelectSection = (id) => {
  setSelectedSectionId(id);
};

const Container = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const SignupFormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Home = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const navigate = useNavigate(); // Инициализируем navigate
  const handleOpenForm = () => {
    navigate("/register"); // Переход на страницу регистрации
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./style.css" />
      <title>Tetris</title>
      <header className="header">
        <div className="conteiner">
          <div className="header-box">
            <div className="header-logo">
              <img className="logo" src="img/logo.svg" alt="logo" />
            </div>
            <div className="header-controlsGame">
              <img src="img/header/play.svg" alt="play" />
              <img src="img/header/pause.svg" alt="pause" />
              <img
                className="settings"
                src="img/header/settings.svg"
                alt="settings"
              />
            </div>
            <div className="header-thems">
              <img src="img/header/sun.svg" alt="whiteThem" />
              <img src="img/header/moon.svg" alt="darkThem" />
              <img
                className="T-rex"
                src="img/header/T-Rex.svg"
                alt="settings"
              />
            </div>
            <div className="header-reg">
              <button
                id="openFormButton"
                className="header-reg"
                onClick={handleOpenForm}
              >
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="conteiner ">
        <div className="content">
          <div className="leftMenu">
            <div className="iconStatus">
              <img src="img/online.svg" alt="online" />
              <hr />
              <img src="img/inGame.svg" alt="" />
            </div>
            <div className="search-box">
              <input
                type="text"
                className="searchInput"
                placeholder="Введите nikName"
              />
              <img src="img/search.svg" alt="" />
            </div>
            <div className="listUser">
              <div className="listUser-li">
                <span>nikName</span>
                <button>Оффлайн</button>
              </div>
              <div className="listUser-li">
                <span>anotherUser</span>
                <button>Онлайн</button>
              </div>
              {/* Добавьте дополнительные элементы списка по мере необходимости */}
            </div>
          </div>
          <div className="main">
            <div className="classick">
              <div className="iconG">
                <img src="img/iconRegim.svg" alt="iconRegim" />
              </div>
              <button>Оффлайн</button>
            </div>
            <hr />
            <div className="section1">
              <div className="classick">
                <div className="iconG">
                  <img src="img/iconRegim.svg" alt="iconRegim" />
                </div>
                <button>Оффлайн</button>
              </div>
              <div className="classick">
                <div className="iconG">
                  <img src="img/iconRegim.svg" alt="iconRegim" />
                </div>
                <button>Оффлайн</button>
              </div>
            </div>
            <hr />
            <div className="section1">
              <div className="classick">
                <div className="iconG">
                  <img src="img/iconRegim.svg" alt="iconRegim" />
                </div>
                <button>Оффлайн</button>
              </div>
              <div className="classick">
                <div className="iconG">
                  <img src="img/iconRegim.svg" alt="iconRegim" />
                </div>
                <button>Оффлайн</button>
              </div>
            </div>
          </div>
          <div className="leftMenu">
            <div className="iconStatus">
              <img src="img/online.svg" alt="online" />
              <hr />
              <img src="img/inGame.svg" alt="" />
            </div>
            <div className="search-box">
              <input
                type="text"
                className="searchInput"
                placeholder="Введите nikName"
              />
              <img src="img/search.svg" alt="" />
            </div>
            <div className="listUser">
              <div className="listUser-li">
                <span>nikName</span>
                <button>Оффлайн</button>
              </div>
              <div className="listUser-li">
                <span>anotherUser</span>
                <button>Онлайн</button>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* content */}
      </div>{" "}
      {/* conteiner */}
      <div className="conteiner">
        <div className="content info">
          <div className="sections">
            {sectionsData.map((section) => (
              <div
                key={section.id}
                className={`section ${
                  selectedSectionId === section.id ? "selected" : ""
                }`}
                onClick={() => handleSelectSection(section.id)}
                style={{
                  display: "inline-block",
                  cursor: "pointer",
                  padding: "10px",
                  border:
                    selectedSectionId === section.id
                      ? "2px solid blue"
                      : "none",
                }}
              >
                <img src={section.icon} className="icon" alt={section.text} />
                {selectedSectionId === section.id && (
                  <span className="section-text">{section.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="content text">
          <p id="content-text">
            Вы выбрали:{" "}
            {sectionsData.find((sec) => sec.id === selectedSectionId).text}
          </p>
        </div>
      </div>
      <footer className="conteiner">Footer</footer>
      {/*  */}
    </>
  );
};

export default Home;
