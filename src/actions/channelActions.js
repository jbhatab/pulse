export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE';

export function createMessage(message) {
  return {
    type: CREATE_MESSAGE,
    message: message
  };
}

export function submitMessage(message, chan) {
  chan.push('new:msg', message)
  return {
    type: SUBMIT_MESSAGE,
    sendingData: true,
    message: message
  };
}
