import React from 'react'
import {connect} from 'react-redux'

const ReviewIndexItem = ({review, author}) => {
  return(
    <li>
      <span>{review.rating}</span><br/>
      <span>{review.description}</span><br/>
      <span>{author.username}</span>
    </li>
  )
}

const mapStateToProps = (state, {review}) => ({
  review: review,
  author: state.entities.users[review.user_id]
})

export default connect(
  mapStateToProps
)(ReviewIndexItem)