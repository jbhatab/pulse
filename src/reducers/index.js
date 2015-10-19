import { combineReducers } from 'redux';
import counter from './counter';
import messages from './messages';

import {
  INCREMENT_COUNTER, DECREMENT_COUNTER,
  UNDO_COUNTER, REDO_COUNTER
} from '../actions/counter';

import {
  CREATE_MESSAGE
} from '../actions/chat';

import undoable, { includeAction } from 'redux-undo';


const rootReducer = combineReducers({
  counter: undoable(counter, {
    filter: includeAction([INCREMENT_COUNTER, DECREMENT_COUNTER]),
    limit: 10,
    debug: true,
    undoType: UNDO_COUNTER,
    redoType: REDO_COUNTER
  }),

  messages: undoable(messages, {
    filter: includeAction([CREATE_MESSAGE]),
    limit: 10,
    debug: true
  }) 
});


export default rootReducer;
