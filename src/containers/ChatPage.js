import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Chat from '../components/Chat';
import * as ChatActions from '../actions/chat';


function mapStateToProps(state) {
  return {
    messages: state.messages.list,
    rooms: state.rooms.list,
    currentRoom: state.rooms.currentRoom,
    user: state.user
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ChatActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
