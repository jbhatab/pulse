import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react'
import {Socket, LongPoller} from "../phoenix"
import * as ChannelActions from '../actions/channelActions';
import Chat from '../components/Chat';

function mapStateToProps(state) {

  return {
    messages: state.messages.list,
    currentChannel: state.channels.currentChannel,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ChannelActions, dispatch);
}

class ChannelContainer extends React.Component {
  componentWillMount() {
    console.log('PROPS')
    console.log(this.props)

    this.socket = new Socket('ws://127.0.0.1:4000/socket', {
      logger: ((kind, msg, data) => { console.log(`${kind}: ${msg}`, data) })
    })

    this.socket.connect({user_id: '123'})

    this.chan = this.socket.chan('rooms:lobby', {})
    

    this.chan = this.socket.chan('channels:lobby', {})
    this.chan.join().receive('ignore', () => console.log('auth error'))

    this.chan.on('new:msg', msg => {
      this.props.createMessage(`${msg.user || 'anonymous'}: ${msg.body}`)
    })

    this.chan.on('user:entered', msg => {
      this.props.createMessage(`${msg.user || 'anonymous'} Entered`)
    })

    this.chan.on('user:set_username', user => {
      this.props.createMessage(`${user.username} set their name`)
    })
  }

  componentWillUnmount() {
    this.socket.disconnect()
  }

  submitMessage(message) {
    this.props.submitMessage(message, this.chan)
  }

  render() {
    return (
      <Chat {...this.props} submitMessage={::this.submitMessage} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelContainer);
