import React from 'react';
import ReactDOM from 'react-dom';
import {login, logout, signup} from './actions/session_actions'
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {

  window.signup = signup;
  window.logout = logout;
  window.login = login;

  const preloadedState = {};
  const store = configureStore(preloadedState);
  window.store = store; //debug

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Lookout Maps</h1>, root);
});