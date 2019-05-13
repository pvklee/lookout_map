json.lookout do
  json.partial! 'lookout', lookout: @lookout
  json.reviewIds @lookout.reviews.pluck(:id)
end

@lookout.reviews.includes(:author).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.authors do
    json.set! review.author.id do
      json.extract! review.author, :id, :username
    end
  end
end