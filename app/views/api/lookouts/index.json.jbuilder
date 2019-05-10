@lookouts.each do |lookout|
  json.set! lookout.id do
    json.extract! lookout, :id, :description, :lat, :lng
  end
end