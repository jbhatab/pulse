import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';
import App from './containers/App';
import * as containers from './containers';

const {
  CommunityContainer,
  ChannelContainer,
  LoginContainer
} = containers;

export default (
  <Route path='/' component={App}>
    <Route path='/channels' component={CommunityContainer} >
      <Route path='login' component={LoginContainer}/>
      <Route path=':channelId' component={ChannelContainer}/>
    </Route>
    <IndexRedirect from="*" to="/channels" />
  </Route>
);
