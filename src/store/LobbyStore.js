import { makeObservable, observable, action } from "mobx";

class LobbyStore {
  rooms = [];
  currentRoom = null;

  constructor() {
    makeObservable(this, {
      rooms: observable,
      currentRoom: observable,
      setRooms: action,
      joinRoom: action,
      leaveRoom: action,
    });
  }

  setRooms(rooms) {
    this.rooms = rooms;
  }

  joinRoom(room) {
    this.currentRoom = room;
  }

  leaveRoom() {
    this.currentRoom = null;
  }
}

export default new LobbyStore();
