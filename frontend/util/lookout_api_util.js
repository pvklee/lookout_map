export const fetchLookouts = (filters) => {
  return $.ajax({
    url: 'api/lookouts',
    method: 'GET',
    data: filters,
    error: err => console.log(err)
  })
}

export const fetchLookout = (id) => {
  return $.ajax({
    url: `api/lookouts/${id}`,
    method: 'GET',
  })
}

export const createLookout = lookout => (
  $.ajax({
    url: 'api/lookouts',
    method: 'POST',
    data: lookout,
    contentType: false,
    processData: false
  })
)

export const createReview = review => (
  $.ajax({
    url: `api/reviews`,
    method: 'POST',
    data: {review},
    error: err => console.log(err)
  })
)