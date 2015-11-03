import _ from 'lodash';
import request from 'superagent';

export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';
export const SET_CHANNELS = 'SET_CHANNELS';
export const SET_USER = 'SET_USER';

export function changeChannel(channel) {
  return dispatch => {
    request
      .get(`http://127.0.0.1:4000/messages?channel_id=${channel.id}`)
      .end((err, res) => {
        let messages = _.pluck(JSON.parse(res.text).data, 'body')
        dispatch({
          type: CHANGE_CHANNEL,
          channel: channel,
          messages: messages
        })
      });
  }
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
