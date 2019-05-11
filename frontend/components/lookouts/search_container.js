import {connect} from 'react-redux'
import {fetchLookouts} from '../../actions/lookouts_actions'
import {updateBounds} from '../../actions/filter_actions'
import { selectAllLookouts } from '../../reducers/selectors'
import Search from './search'

const mapStateToProps = state => ({
  lookouts: selectAllLookouts(state)
})

const mapDispatchToProps = dispatch => ({
  fetchLookouts: () => dispatch(fetchLookouts()),
  updateBounds: bounds => dispatch(updateBounds(bounds))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)