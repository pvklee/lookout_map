import {RECEIVE_LOOKOUTS, RECEIVE_LOOKOUT} from '../actions/lookouts_actions'
import merge from 'lodash/merge'

const lookoutsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_LOOKOUTS:
      return action.lookouts; 
    case RECEIVE_LOOKOUT:
      return merge({}, state, {[action.lookout.id]: action.lookout})
    default:
      return state;
  }
}

export default lookoutsReducer;