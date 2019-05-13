@lookouts.each do |lookout|
  json.set! lookout.id do
    json.partial! 'lookout', lookout: lookout
    json.reviewIds []
  end
end