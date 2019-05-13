export const selectAllSessionErrors = state => (
  Object.values(state.errors.session)
)

export const selectAllLookouts = state => (
  Object.values(state.entities.lookouts)
)

export const selectReviewsByIds = (state, reviewIds) => (
  reviewIds.map(id => state.entities.reviews[id])
)
