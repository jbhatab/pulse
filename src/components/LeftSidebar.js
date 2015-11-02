import React, { Component, PropTypes } from 'react'
import {Socket, LongPoller} from '../phoenix'
import { Link } from 'react-router'

export default class Sidebar extends Component {

  state = {inputUsername: ''}

  onUserKeyDown(e) {
    if (e.keyCode == 13) {
      this.chan.push('change:username', {username: this.state.inputUsername})
      e.preventDefault()
    }
  }

  onUserChange(e) {
    this.setState({inputUsername: e.target.value})
  }

  onRoomChange(channel) {
    this.props.changeChannel(channel)
  }

  render() {
    let Channels = this.props.channels.map((channel, index) => (
      <Link to={`/channels/${channel.id}`} key={`${index}-channel-link`}>
        {channel.name}
      </Link>
    ));

    return (
      <div>
        <div className='left-sidebar-wrapper sidebar-wrapper'>
          <div className='sidebar-section'>
            <h3 className='title'>
              Channels
            </h3>

            <div className='list'>
              { Channels }
            </div>

            <input
              className='user-input'
              placeholder='Enter a name mother fucker!!!'
              onChange={e => this.onUserChange(e)}
              onKeyDown={e => this.onUserKeyDown(e)}
              value={this.state.inputUsername}/>
          </div>
        </div>
      </div>
    );
  }
}
