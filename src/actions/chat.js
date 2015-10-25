export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const CHANGE_ROOM = 'CHANGE_ROOM';
export const SET_ROOMS = 'SET_ROOMS';

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

export function setRooms(rooms) {
  return {
    type: SET_ROOMS,
    rooms: rooms
  };
}
