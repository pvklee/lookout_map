json.extract! lookout, :id, :description, :lat, :lng, :lookout_type, :average_rating
begin
  json.photoUrl url_for(lookout.photo)
rescue
  json.photoUrl ''
end