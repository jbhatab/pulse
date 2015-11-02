import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import * as containers from './containers';

const {
  RoomContainer,
  ChannelContainer
} = containers;

export default (
  <Route component={App}>
    <Route path='/channels' component={RoomContainer} >
      <Route path=':channelId' component={ChannelContainer}/>
    </Route>
  </Route>
);
