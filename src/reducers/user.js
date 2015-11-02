import { SET_USER } from '../actions/communityActions';


export default function rooms (state = { username: null }, action) {
  switch (action.type) {
  case SET_USER:
    return { ...state, username: action.username };
  default:
    return state;
  }
}
