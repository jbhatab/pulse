import { CREATE_MESSAGE } from '../actions/chat';


export default function messages(state = { data: [] }, action) {
  switch (action.type) {
  case CREATE_MESSAGE:
    // State mutations are bad, in dev mode, we detect them and throw an error.
    // Try it out by uncommenting the line below and running `npm run dev`!
    // state.mutation = true;
    let data = state.data
    data.push(action.message)
    return { ...state, data:  data};
  default:
    return state;
  }
}
