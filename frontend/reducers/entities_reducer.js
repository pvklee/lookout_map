import {combineReducers} from 'redux'
import usersReducer from './users_reducer'
import lookoutsReducer from './lookouts_reducer'
import reviewsReducer from './reviews_reducer'

export default combineReducers({
  users: usersReducer,
  lookouts: lookoutsReducer,
  reviews: reviewsReducer
})