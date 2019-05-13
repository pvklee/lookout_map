import {connect} from 'react-redux'
import {createReview} from '../../actions/lookouts_actions'
import ReviewForm from './review_form'

const mapStateToProps = (state, {lookoutId}) => ({
  currentUserId: state.session.id,
  lookoutId: lookoutId
})

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm)