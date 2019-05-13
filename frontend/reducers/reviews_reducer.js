import {RECEIVE_LOOKOUT, RECEIVE_REVIEW} from '../actions/lookouts_actions'
import merge from 'lodash/merge'

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_LOOKOUT:
      return merge({}, state, action.reviews)
    case RECEIVE_REVIEW:
    debugger;
      return merge({}, state, {[action.review.id]: action.review})
    default:
      return state;
  }
}

export default reviewsReducer;