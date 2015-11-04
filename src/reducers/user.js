import { SET_USER } from '../actions/communityActions';


export default function users (state = { id: null, username: null, firstname: null, lastname: null, email: null }, action) {
  switch (action.type) {
  case SET_USER:
    return { ...state, username: action.username };
  default:
    return state;
  }
}
