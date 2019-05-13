import React from 'react'
import LookoutsMap from './lookouts_map'
import {Link} from 'react-router-dom'
import ReviewsIndexContainer from '../reviews/reviews_index_container'

export default class LookoutShow extends React.Component{

  componentDidMount(){
    const {lookoutId, fetchLookout} = this.props
    fetchLookout(lookoutId);
  }

  render(){
    const {lookout, lookoutId} = this.props
    const lookouts = {[lookoutId]: lookout}

    if (!lookout) return null;

    return(
      <div>
        <Link to='/'>Back to search</Link>
        <LookoutsMap lookouts={lookouts} lookoutId={lookoutId} singleLookout={true}/>
        <img src={lookout.photoUrl} />
        <ReviewsIndexContainer lookout={lookout}/>
      </div>
    )
  }
}
