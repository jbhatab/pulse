import React, { Component, PropTypes } from 'react'
import {Socket, LongPoller} from '../phoenix'
import request from 'superagent'


export default class Sidebar extends Component {

  state = {inputUsername: ''}

  componentWillMount() {
    request
      .get('http://127.0.0.1:4000/rooms')
      .end((err, res) => {
        let rooms = JSON.parse(res.text).data
        this.props.setRooms(rooms)
        // Calling the end function will send the request
      });
  }

  onUserKeyDown(e) {
    if (e.keyCode == 13) {
      this.chan.push('change:username', {username: this.state.inputUsername})
      e.preventDefault()
    }
  }

  onUserChange(e) {
    this.setState({inputUsername: e.target.value})
  }

  onRoomChange(room) {
    this.props.changeRoom(room)
  }

  render() {
    let Rooms = this.props.rooms.map((room, index) => (
      <li onClick={e => this.onRoomChange(room)} key={`${index}-room.name`}>
        {room.name}
      </li>
    ));

    return (
      <div>
        <div className='left-sidebar-wrapper sidebar-wrapper'>
          <div className='sidebar-section'>
            <h3 className='title'>
              Channels
            </h3>

            <ul className='list'>
              { Rooms }
            </ul>

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
