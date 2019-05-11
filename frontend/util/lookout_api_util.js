export const fetchLookouts = (filters) => {
  return $.ajax({
    url: 'api/lookouts',
    method: 'GET',
    data: filters,
    error: err => console.log(err)
  })
}

export const createLookout = lookout => (
  $.ajax({
    url: 'api/lookouts',
    method: 'POST',
    data: {lookout},
    error: err => console.log(err)
  })
)