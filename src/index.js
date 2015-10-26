import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import './stylesheets/application.sass';

const history = createBrowserHistory();


ReactDOM.render(
  <Root history={history} />,
  document.getElementById('root')
);
