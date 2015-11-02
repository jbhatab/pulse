import { CHANGE_ROOM, SET_ROOMS } from '../actions/roomActions';

export default function rooms (state = { list: [], currentRoom: {} }, action) {
  switch (action.type) {
  case SET_ROOMS:
    return { ...state, list: action.rooms, currentRoom: action.rooms[0]};
  case CHANGE_ROOM:
    return { ...state, currentRoom: action.room};
  default:
    return state;
  }
}
