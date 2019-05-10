@lookouts.each do |lookout|
  json.set! lookout.id do
    json.extract! lookout, :description, :lat, :lng
  end
end