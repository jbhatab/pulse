// FUNCTIONAL PROGRAMMMINGGGNNGNGNGNGNGNGNGN
// GET WITH IT
// let socket = new Socket("ws://127.0.0.1:4000/socket", {
//   logger: ((kind, msg, data) => { console.log(`${kind}: ${msg}`, data) })
// })

// socket.connect({user_id: "123"})

// // socket.onOpen( ev => console.log("OPEN", ev) )
// // socket.onError( ev => console.log("ERROR", ev) )
// // socket.onClose( e => console.log("CLOSE", e))

// let chan = socket.chan("rooms:lobby", {})
// chan.join().receive("ignore", () => console.log("auth error"))
// // .receive("ok", () => console.log("join ok"))
// // .after(10000, () => console.log("Connection interruption"))
// // this.chan.onError(e => console.log("something went wrong", e))
// // this.chan.onClose(e => console.log("channel closed", e))

// // this.chan.on("new:msg", msg => {
// //   let newMessages = this.state.tempMessages
// //   newMessages.push(`${msg.user || 'anonymous'}: ${msg.body}`)
// //   this.setState({tempMessages: newMessages})
// // })

// chan.on("user:entered", msg => {
//   this.props.createMessage(`${msg.user || 'anonymous'} Entered`)
// })

// chan.on("user:set_username", user => {
//   this.props.createMessage(`${user.username} set their name`)
// })

// function thisCallsActionCreator(socket) {
//   dispatch(ChatActions.SUBMIT_MESSAGE(socket))
// }

// function wrapActionCreator (actionCreator, socket) {
//   let result = actionCreator(...arguments)
//   socket.sendStuff(result)
//   return result
// }

// Object.keys(ChatActions).map(chatActionName => {
//   let chatAction = ChatActions[chatActionName]
//   if (typeof chatAction === 'function') {
//     return wrapActionCreator(chatAction, chan)
//   }
//   // return wrapActionCreator(chatAction, chan)
// })