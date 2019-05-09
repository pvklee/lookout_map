import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {

  window.signup = APIUtil.signup;
  window.logout = APIUtil.logout;
  window.login = APIUtil.login;

  

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Lookout Maps</h1>, root);
});