import { combineReducers } from 'redux';
import messages from './messages';
import rooms from './rooms';
import user from './user';

const rootReducer = combineReducers({
  messages: messages,

  rooms: rooms,

  user: user
});


export default rootReducer;
