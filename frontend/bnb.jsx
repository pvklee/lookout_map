import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'

import Root from './components/root'

import {fetchLookouts} from './actions/lookout_actions'

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TESTING
  window.fetchLookouts = fetchLookouts;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TESTING

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});