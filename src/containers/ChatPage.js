import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Chat from '../components/Chat';
import * as ChatActions from '../actions/chat';


function mapStateToProps(state) {
  console.log('STATEEE')
  console.log(state.rooms)
  return {
    messages: state.messages.list,
    rooms: state.rooms.list,
    currentRoom: state.rooms.currentRoom
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ChatActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Chat);
