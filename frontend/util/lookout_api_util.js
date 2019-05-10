export const fetchLookouts = () => (
  $.ajax({
    url: 'api/lookouts',
    method: 'GET',
    error: err => console.log(err)
  })
)