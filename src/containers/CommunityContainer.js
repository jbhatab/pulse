import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react'
import * as CommunityActions from '../actions/communityActions';
import Sidebar from '../components/Sidebar';


function mapStateToProps(state) {
  return {
    channels: state.channels.list,
    currentChannel: state.channels.currentChannel,
    user: state.user
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(CommunityActions, dispatch);
}


class CommunityContainer extends React.Component {
  render() {
    return (
      <div>
        <Sidebar {...this.props} />
        {this.props.children}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityContainer);
