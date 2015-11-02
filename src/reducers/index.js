import { combineReducers } from 'redux';
import messages from './messages';
import channels from './channels';
import user from './user';

const rootReducer = combineReducers({
  messages: messages,

  channels: channels,

  user: user
});


export default rootReducer;
