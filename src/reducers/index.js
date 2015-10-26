import { combineReducers } from 'redux';
import counter from './counter';
import messages from './messages';
import rooms from './rooms';

import {
  INCREMENT_COUNTER, DECREMENT_COUNTER,
  UNDO_COUNTER, REDO_COUNTER
} from '../actions/counter';

import undoable, { includeAction } from 'redux-undo';


const rootReducer = combineReducers({
  counter: undoable(counter, {
    filter: includeAction([INCREMENT_COUNTER, DECREMENT_COUNTER]),
    limit: 10,
    debug: true,
    undoType: UNDO_COUNTER,
    redoType: REDO_COUNTER
  }),

  messages: messages,

  rooms: rooms

});


export default rootReducer;
