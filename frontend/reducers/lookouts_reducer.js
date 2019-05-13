import {RECEIVE_LOOKOUTS, RECEIVE_LOOKOUT, RECEIVE_REVIEW} from '../actions/lookouts_actions'
import merge from 'lodash/merge'

const lookoutsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_LOOKOUTS:
      return action.lookouts; 
    case RECEIVE_LOOKOUT:
      return merge({}, state, {[action.lookout.id]: action.lookout})
    case RECEIVE_REVIEW:
      debugger;
      const review = action.review;
      const newState = merge({}, state);
      newState[review.lookout_id].reviewIds.push(review.id);
      newState[review.lookout_id].average_rating = action.lookout.average_rating;
      return newState;
    default:
      return state;
  }
}

export default lookoutsReducer;