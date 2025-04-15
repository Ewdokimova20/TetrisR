import { makeObservable, observable, action, computed } from "mobx";

class StatisticsStore {
  userStats = {};
  globalStats = {};

  constructor() {
    makeObservable(this, {
      userStats: observable,
      globalStats: observable,
      setUserStats: action,
      setGlobalStats: action,
      getUserStatistics: computed,
      getGlobalStatistics: computed,
    });
  }

  setUserStats(stats) {
    this.userStats = stats;
  }

  setGlobalStats(stats) {
    this.globalStats = stats;
  }

  get getUserStatistics() {
    return this.userStats;
  }

  get getGlobalStatistics() {
    return this.globalStats;
  }
}

export default new StatisticsStore();
