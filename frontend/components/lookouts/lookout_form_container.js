import {connect} from 'react-redux'
import {createLookout} from '../../actions/lookouts_actions'
import LookoutForm from './lookout_form'

const mapStateToProps = (state, {location}) => ({
  lat: new URLSearchParams(location.search).get('lat'),
  lng: new URLSearchParams(location.search).get('lng')
})

const mapDispatchToProps = dispatch => ({
  createLookout: lookout => dispatch(createLookout(lookout))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LookoutForm)