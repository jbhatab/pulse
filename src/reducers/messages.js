import { CREATE_MESSAGE, SUBMIT_MESSAGE, CHANGE_ROOM } from '../actions/chat';


export default function messages(state = { list: [] }, action) {
  switch (action.type) {
  case SUBMIT_MESSAGE:
    return state
  case CHANGE_ROOM:
    return { ...state, list: []};
  case CREATE_MESSAGE:
    // State mutations are bad, in dev mode, we detect them and throw an error.
    // Try it out by uncommenting the line below and running `npm run dev`!
    // state.mutation = true;
    return { ...state, list:  [...state.list, action.message]};
  default:
    return state;
  }
}
