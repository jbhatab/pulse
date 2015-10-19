export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export function createMessage(message) {
  return {
    type: CREATE_MESSAGE,
    message: message
  };
}
