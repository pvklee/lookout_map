import {fetchLookouts} from './lookouts_actions'

export const UPDATE_FILTER = "UPDATE_FILTER"

export const changeFilter = filter => ({
  type: UPDATE_FILTER,
  filter
})


export const updateFilter = (filter) => (dispatch, getState) => {
  dispatch(changeFilter(filter));
  // return fetchLookouts(filter)(dispatch);
  return fetchLookouts(getState().ui.filters)(dispatch);
};
