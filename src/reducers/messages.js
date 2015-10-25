import { CREATE_MESSAGE } from '../actions/chat';


export default function messages(state = { list: [] }, action) {
  switch (action.type) {
  case CREATE_MESSAGE:
    // State mutations are bad, in dev mode, we detect them and throw an error.
    // Try it out by uncommenting the line below and running `npm run dev`!
    // state.mutation = true;
    let list = state.list
    list.push(action.message)
    return { ...state, list:  list};
  default:
    return state;
  }
}
