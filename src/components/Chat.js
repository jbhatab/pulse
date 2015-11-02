import React, { Component, PropTypes } from 'react'

export default class Chat extends Component {
  state = {
    message: ''
  }

  static propTypes = {
    createMessage: PropTypes.func.isRequired
  }

  onMessageKeyDown(e) {
    if (e.keyCode == 13 && this.props.currentChannel.id) {
      this.props.submitMessage({user: 'anonymous', body: this.state.message, channel_id: this.props.currentChannel.id})
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

    let channelTitle;
    if (this.props.currentChannel.name) {
      channelTitle = this.props.currentChannel.name
    } else {
      channelTitle = 'No Channels'
    }

    return (
      <div className='chat-wrapper'>
        <h1>
          { channelTitle }
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
    );
  }
}
