import { CHANGE_CHANNEL, SET_CHANNELS } from '../actions/communityActions';

export default function channels (state = { list: [], currentChannel: {}, loaded: false }, action) {
  switch (action.type) {
  case SET_CHANNELS:
    return { ...state, list: action.channels, currentChannel: action.channels[0], loaded: true};
  case CHANGE_CHANNEL:
    return { ...state, currentChannel: action.channel};
  default:
    return state;
  }
}
