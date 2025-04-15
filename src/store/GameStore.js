import { makeObservable, observable, action } from "mobx";

class GameStore {
  currentGame = null;
  gamesHistory = [];

  constructor() {
    makeObservable(this, {
      currentGame: observable,
      gamesHistory: observable,
      startGame: action,
      endGame: action,
    });
  }

  startGame(gameData) {
    this.currentGame = gameData;
  }

  endGame(gameId) {
    // Добавить логику обработки завершения игры
    this.gamesHistory.push(this.currentGame);
    this.currentGame = null; // Сбрасываем текущую игру
  }
}

export default new GameStore();
