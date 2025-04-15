import { makeObservable, observable } from "mobx";
import userStore from "./UserStore";
import gameStore from "./GameStore";
import lobbyStore from "./LobbyStore";
import statisticsStore from "./StatisticsStore";

class AppStore {
  constructor() {
    makeObservable(this, {
      userStore: observable,
      gameStore: observable,
      lobbyStore: observable,
      statisticsStore: observable,
    });

    this.userStore = userStore;
    this.gameStore = gameStore;
    this.lobbyStore = lobbyStore;
    this.statisticsStore = statisticsStore;
  }
}

export default new AppStore();
