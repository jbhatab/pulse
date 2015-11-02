export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';
export const SET_CHANNELS = 'SET_CHANNELS';
export const SET_USER = 'SET_USER';

export function changeChannels(channel) {
  return {
    type: CHANGE_CHANNEL,
    channel: channel
  };
}

export function setUser(username) {
  return {
    type: SET_USER,
    username: username
  };
}


export function setChannels(channels) {
  return {
    type: SET_CHANNELS,
    channels: channels
  };
}
