export const fetchLookouts = (filters) => {
  return $.ajax({
    url: 'api/lookouts',
    method: 'GET',
    data: filters,
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
  })
)