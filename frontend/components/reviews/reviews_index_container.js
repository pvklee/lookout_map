import {connect} from 'react-redux'
import ReviewsIndex from './reviews_index'
import {selectReviewsByIds} from '../../reducers/selectors'

const mapStateToProps = (state, {lookout}) => {
  const reviews = selectReviewsByIds(state, lookout.reviewIds);
  return({
    reviews: reviews,
    lookoutId: lookout.id,
    averageRating: lookout.average_rating
  })
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsIndex)