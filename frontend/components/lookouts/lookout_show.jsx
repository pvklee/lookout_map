import React from 'react'
import LookoutsMap from './lookouts_map'
import {Link} from 'react-router-dom'

const LookoutShow = ({lookout, lookoutId, fetchLookout}) => {
  const lookouts = {[lookoutId]: lookout}
  return(
    <div>
      <Link to='/'>Back to search</Link>
      <LookoutsMap lookouts={lookouts} lookoutId={lookoutId} fetchLookout={fetchLookout} singleLookout={true}/>
    </div>
  )
}

export default LookoutShow;