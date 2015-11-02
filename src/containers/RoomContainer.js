import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react'
import * as RoomActions from '../actions/roomActions';
import Sidebar from '../components/Sidebar';


function mapStateToProps(state) {
  return {
    rooms: state.rooms.list,
    currentRoom: state.rooms.currentRoom,
    user: state.user
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(RoomActions, dispatch);
}


class RoomContainer extends React.Component {
  render() {
    return (
      <div>
        <Sidebar {...this.props} />
        {this.props.children}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);
