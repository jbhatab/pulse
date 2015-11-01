import React, { Component, PropTypes } from 'react'
import request from "superagent"
import Sidebar from "./Sidebar"


export default class Chat extends Component {
  state = {
    message: '',
  }

  static propTypes = {
    createMessage: PropTypes.func.isRequired
  }

  onMessageKeyDown(e) {
    if (e.keyCode == 13 && this.props.currentRoom.id) {
      this.props.submitMessage({user: 'anonymous', body: this.state.message, room_id: this.props.currentRoom.id})
      this.setState({message: ''})
      e.preventDefault()
    }
  }

  onMessageChange(e) {
    this.setState({message: e.target.value})
  }

  render() {
    const Messages = this.props.messages.map((message, index) => (
      <li key={`${index}-message`}>
        {message}
      </li>
    ));

    let roomTitle;
    if (this.props.currentRoom.name) {
      roomTitle = this.props.currentRoom.name
    } else {
      roomTitle = 'No Rooms'
    }

    return (
      <div>
        <Sidebar {...this.props}/>
        <div className='chat-wrapper'>
          <h1>
            { roomTitle }
          </h1>
          <ul>
            { Messages }
          </ul>

          <div className='chat-input-wrapper'>
            <input
              className='chat-input'
              placeholder='Enter a message mother fucker!!!'
              onChange={e => this.onMessageChange(e)}
              onKeyDown={e => this.onMessageKeyDown(e)}
              value={this.state.message}/>
          </div>
        </div>

        <div className='right-sidebar-wrapper sidebar-wrapper'>
        </div>
      </div>
    );
  }
}
