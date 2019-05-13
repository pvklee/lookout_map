import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {RECEIVE_LOOKOUT} from '../actions/lookouts_actions'
import merge from 'lodash/merge'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.user}); 
    case RECEIVE_LOOKOUT:
      return merge({}, state, action.authors)
    default:
      return state;
  }
}

export default usersReducer;