export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const CHANGE_ROOM = 'CHANGE_ROOM';
export const SET_ROOMS = 'SET_ROOMS';
export const SET_USER = 'SET_USER';

export function createMessage(message) {
  return {
    type: CREATE_MESSAGE,
    message: message
  };
}

export function changeRoom(room) {
  return {
    type: CHANGE_ROOM,
    room: room
  };
}

export function setUser(username) {
  return {
    type: SET_USER,
    username: username
  };
}


export function setRooms(rooms) {
  return {
    type: SET_ROOMS,
    rooms: rooms
  };
}
