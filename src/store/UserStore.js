import { makeObservable, observable, action, computed } from "mobx";

class UserStore {
  user = null;
  isAuthenticated = false;

  constructor() {
    makeObservable(this, {
      user: observable,
      isAuthenticated: observable,
      setUser: action,
      logout: action,
      isLoggedIn: computed,
    });
  }

  setUser(user) {
    this.user = user;
    this.isAuthenticated = !!user;
  }

  logout() {
    this.user = null;
    this.isAuthenticated = false;
    localStorage.removeItem("token"); // Очистка токена
  }

  get isLoggedIn() {
    return this.isAuthenticated;
  }
}

export default new UserStore();
