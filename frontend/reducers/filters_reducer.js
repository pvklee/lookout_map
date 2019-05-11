import {UPDATE_FILTER} from '../actions/filter_actions'
import merge from 'lodash/merge'

// const initialState={
//   northEast: {lat: 50.11021520483919, lng: -49.828338633524254},
//   southWest: {lat: 49.8895315486438, lng: -50.171661366475746}
// }

const filtersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case UPDATE_FILTER:
      return merge({}, state, {[action.value]: action.filter}); 
    default:
      return state;
  }
}

export default filtersReducer;