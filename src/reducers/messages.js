import { CREATE_MESSAGE } from '../actions/chat';


export default function messages(state = { messages: [] }, action) {
  cosole.log('message reducer')
  console.log(action)
  switch (action.type) {
  case CREATE_MESSAGE:
    // State mutations are bad, in dev mode, we detect them and throw an error.
    // Try it out by uncommenting the line below and running `npm run dev`!
    // state.mutation = true;
    let messages = state.messages
    messages.push(action.message)
    console.log(messages)
    return { ...state, messages:  messages};
  default:
    return state;
  }
}
