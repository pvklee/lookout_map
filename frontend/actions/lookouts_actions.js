import * as APIUtil from '../util/lookout_api_util'

export const RECEIVE_LOOKOUTS = "RECEIVE_LOOKOUTS"
export const RECEIVE_LOOKOUT = "RECEIVE_LOOKOUT"


const receiveLookouts = lookouts => ({
  type: RECEIVE_LOOKOUTS,
  lookouts
})

const receiveLookout = lookout => ({
  type: RECEIVE_LOOKOUT,
  lookout
})


//async

export const fetchLookouts = bounds => dispatch => (
  APIUtil.fetchLookouts(bounds)
    .then(lookouts => dispatch(receiveLookouts(lookouts)))
    // .fail(err => dispatch(receiveErrors(err.responseJSON)))
)

export const createLookout = lookout => dispatch => (
  APIUtil.createLookout(lookout)
    .then(lookout => dispatch(receiveLookout(lookout)))
)