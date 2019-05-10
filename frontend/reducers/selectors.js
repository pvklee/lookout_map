export const selectAllSessionErrors = state => (
  Object.values(state.errors.session)
)

export const selectAllLookouts = state => (
  Object.values(state.entities.lookouts)
)