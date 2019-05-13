import {connect} from 'react-redux'
import {fetchLookout} from '../../actions/lookouts_actions'
import LookoutShow from './lookout_show'

const mapStateToProps = (state, {match}) => {
  const lookoutId = parseInt(match.params.lookoutId)
  const lookout = state.entities.lookouts[lookoutId];
  return{
    lookout: lookout,
    lookoutId: lookoutId
  };
}

const mapDispatchToProps = dispatch => ({
  fetchLookout: (id) => dispatch(fetchLookout(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LookoutShow)