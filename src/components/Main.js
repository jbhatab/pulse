import React, { Component, PropTypes } from 'react';


export default class Main extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired
  }

  componentWillMount() {
    console.log('IS THIS MOTHER FCUKING MOOUNTING')
    console.log(this.props)
  }

  render() {
    return (
      <div>
          {/* this will render the child routes */}
          {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
