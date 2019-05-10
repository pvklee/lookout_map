export const fetchLookouts = (bounds) => {
  debugger;
  return $.ajax({
    url: 'api/lookouts',
    method: 'GET',
    data: {bounds},
    error: err => console.log(err)
  })
}