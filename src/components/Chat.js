import React, { Component, PropTypes } from 'react'
import {Socket, LongPoller} from "../phoenix"
import request from "superagent"


export default class Chat extends Component {
  constructor(props, context) {
    super(props, context)

    let socket = new Socket("ws://127.0.0.1:4000/socket", {
      logger: ((kind, msg, data) => { console.log(`${kind}: ${msg}`, data) })
    })

    socket.connect({user_id: "123"})

    // socket.onOpen( ev => console.log("OPEN", ev) )
    // socket.onError( ev => console.log("ERROR", ev) )
    // socket.onClose( e => console.log("CLOSE", e))

    this.chan = socket.chan("rooms:lobby", {})
    this.chan.join().receive("ignore", () => console.log("auth error"))
    // .receive("ok", () => console.log("join ok"))
    // .after(10000, () => console.log("Connection interruption"))
    // this.chan.onError(e => console.log("something went wrong", e))
    // this.chan.onClose(e => console.log("channel closed", e))

    this.state = {
      message: '',
      tempMessages: [],
    }

    this.chan.on("new:msg", msg => {
      let newMessages = this.state.tempMessages
      newMessages.push(`${msg.user || 'anonymous'}: ${msg.body}`)
      this.setState({tempMessages: newMessages})
    })

    this.chan.on("user:entered", msg => {
      let newMessages = this.state.tempMessages
      newMessages.push(`${msg.user || 'anonymous'} Entered`)
      this.setState({tempMessages: newMessages})
    })

  }

  static propTypes = {
    createMessage: PropTypes.func.isRequired
  }

  componentWillMount() {
    request
      .get('http://127.0.0.1:4000/rooms')
      .end((err, res) => {
        let rooms = JSON.parse(res.text).data
        this.props.setRooms(rooms)
        // Calling the end function will send the request
      });
  }

  onInputKeyDown(e) {
    if (e.keyCode == 13 && this.props.currentRoom.id) {
      this.chan.push("new:msg", {user: 'anonymous', body: this.state.message, room_id: this.props.currentRoom.id})
      this.setState({message: ""})
      e.preventDefault()
    }
  }

  onInputChange(e) {
    this.setState({message: e.target.value})
  }

  submitMessage() {
    this.props.createMessage(this.state.message)
    this.setState({message: ''})
  }

  onRoomChange(room) {
    console.log(room)
    this.props.changeRoom(room)
  }

  render() {
    const Messages = this.state.tempMessages.map((message, index) => (
      <li key={`${index}-message`}>
        {message}
      </li>
    ));

    let roomStyles = {
      background: '#EEE',
      cursor: 'pointer'
    }

    let Rooms = this.props.rooms.map((room, index) => (
      <li style={roomStyles} onClick={e => this.onRoomChange(room)} key={`${index}-room.name`}>
        {room.name}
      </li>
    ));

    const sidebarStyles = {
      display: 'inline-block',
      width: '200px'};

    const chatStyles = {
      display: 'inline-block'};

    let roomTitle;
    if (this.props.currentRoom.name) {
      roomTitle = this.props.currentRoom.name
    } else {
      roomTitle = 'No Rooms'
    }

    return (
      <div>
        <div style={sidebarStyles}>
          <ul>
            { Rooms }
          </ul>
        </div>
        <div style={chatStyles}>
          <input
            onChange={e => this.onInputChange(e)}
            onKeyDown={e => this.onInputKeyDown(e)}
            value={this.state.message}/>
          <h1>
          { roomTitle }
          </h1>
          <ul>
            { Messages }
          </ul>
        </div>
      </div>
    );
  }
}
