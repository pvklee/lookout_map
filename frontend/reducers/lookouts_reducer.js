import {RECEIVE_LOOKOUTS} from '../actions/lookouts_actions'
import merge from 'lodash/merge'

const lookoutsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_LOOKOUTS:
      return action.lookouts; 
    default:
      return state;
  }
}

export default lookoutsReducer;