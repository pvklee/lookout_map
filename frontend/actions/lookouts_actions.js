import * as APIUtil from '../util/lookout_api_util'

export const RECEIVE_LOOKOUTS = "RECEIVE_LOOKOUTS"

const receiveLookouts = lookouts => ({
  type: RECEIVE_LOOKOUTS,
  lookouts
})


//async

export const fetchLookouts = () => dispatch => (
  APIUtil.fetchLookouts()
    .then(lookouts => dispatch(receiveLookouts(lookouts)))
    // .fail(err => dispatch(receiveErrors(err.responseJSON)))
)