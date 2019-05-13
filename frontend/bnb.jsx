import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'

import Root from './components/root'

import {createReview} from './actions/lookouts_actions'

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
  window.testReview = {user_id: 2, lookout_id: 1, rating: 4, description: 'nice'}
  window.createReview = createReview;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TESTING

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});