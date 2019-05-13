json.review do 
  json.partial! 'review', review: @review
end

json.lookout do
  json.extract! @lookout, :average_rating
end