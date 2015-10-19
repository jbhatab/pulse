import React, { Component, PropTypes } from 'react';


export default class Chat extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { message: '' }
  }

  static propTypes = {
    createMessage: PropTypes.func.isRequired
  }

  changeMessage(e) {
    this.setState({message: e.target.value})
  }

  submitMessage() {
    console.log(this.props)
    this.props.createMessage(this.state.message)
    this.setState({message: ''})
  }

  render() {
    console.log(this.props)
    const Messages = this.props.messages.map(message, index => (
      <li key={`${index}-message`}>
        {message}
      </li>
    ));
    return (
      <div>
        <input onChange={e => this.changeMessage(e)} value={this.state.message}/>
        <button onClick={e => this.submitMessage()}>Enter</button>
        <ul>
          { Messages }
        </ul>
      </div>
    );
  }
}
