import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react'
import * as LoginActions from '../actions/loginActions';


function mapStateToProps(state) {
  return {
    user: state.user
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginActions, dispatch);
}


class LoginContainer extends React.Component {
  componentWillMount() {
    console.log('LOG IN MOTHERFUCKERs')
  }

  render() {
    return (
      <div className='main-wrapper'>
        <a className='login-close'>
          X
        </a>
        <div className='login-wrapper'>

          <h1 className='title'>LOGIN</h1>
          <div className='form-section'>
            <label>Username</label>
            <input
              placeholder='Username'/>
          </div>

          <div className='form-section'>
            <label>Email</label>
            <input
              placeholder='Email'/>
          </div>

          <div className='form-section'>
            <label>First Name</label>
            <input
              placeholder='First Name'/>
          </div>

          <div className='form-section'>
            <label>Last Name</label>
            <input
              placeholder='Last Name'/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
