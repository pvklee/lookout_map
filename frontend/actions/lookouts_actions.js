import * as APIUtil from '../util/lookout_api_util'

export const RECEIVE_LOOKOUTS = "RECEIVE_LOOKOUTS"
export const RECEIVE_LOOKOUT = "RECEIVE_LOOKOUT"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"

const receiveLookouts = lookouts => ({
  type: RECEIVE_LOOKOUTS,
  lookouts
})

const receiveLookout = ({lookout, reviews, authors}) => ({
  type: RECEIVE_LOOKOUT,
  lookout,
  reviews,
  authors
})

const receiveReview = ({review, lookout}) => ({
  type: RECEIVE_REVIEW,
  review,
  lookout
})

//async

export const fetchLookouts = bounds => dispatch => (
  APIUtil.fetchLookouts(bounds)
    .then(lookouts => dispatch(receiveLookouts(lookouts)))
    // .fail(err => dispatch(receiveErrors(err.responseJSON)))
)

export const fetchLookout = id => dispatch => (
  APIUtil.fetchLookout(id)
    .then(lookout => dispatch(receiveLookout(lookout)))
)

export const createLookout = lookout => dispatch => (
  APIUtil.createLookout(lookout)
    .then(lookout => dispatch(receiveLookout(lookout)))
)

export const createReview = review => dispatch => (
  APIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
)