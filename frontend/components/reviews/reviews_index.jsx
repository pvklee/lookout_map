import React from 'react'
import ReviewIndexItemContainer from './reviews_index_item_container'
import ReviewFormContainer from './review_form_container'

export default ({reviews, lookoutId, averageRating}) => {
  const reviewsList = reviews.map(review => <ReviewIndexItemContainer key={review.id} review={review}/>)
  
  return(
    <div>
      <ReviewFormContainer lookoutId={lookoutId}/>
      <span>Average rating: {parseFloat(averageRating).toFixed(2)}</span>
      <ul>
        {reviewsList}
      </ul>
    </div>
  )
}