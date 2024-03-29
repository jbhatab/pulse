import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react'
import * as CommunityActions from '../actions/communityActions';
import LeftSidebar from '../components/LeftSidebar';
import Loader from '../components/Loader';
import request from 'superagent';
import _ from 'lodash';


function mapStateToProps(state) {
  return {
    channels: state.channels.list,
    currentChannel: state.channels.currentChannel,
    user: state.user,
    channelsLoaded: state.channels.loaded
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(CommunityActions, dispatch);
}


class CommunityContainer extends React.Component {
  componentWillMount() {
    if(this.props.channelsLoaded) {
      this.props.history.pushState(null, `/channels/${this.props.currentChannel.id}`)
    } else {
      request
        .get('http://127.0.0.1:4000/channels')
        .end((err, res) => {
          let channels = JSON.parse(res.text).data
          this.props.setChannels(channels)
          // Calling the end function will send the request
        });
    }
  }

  openLogin() {

    console.log('open login')
  }

  render() {
    if(this.props.channelsLoaded) {
      return (
        <div>
          <LeftSidebar {...this.props} openLogin={::this.openLogin} />
          {this.props.children}
        </div>
      );
    } else {
      return (
        <Loader/>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityContainer);
