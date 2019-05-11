import React from 'react'
import LookoutsMap from './lookouts_map'
import LookoutsIndex from './lookouts_index'

export default ({lookouts, fetchLookouts, updateBounds}) => (
  <div>
    <LookoutsMap lookouts={lookouts} updateBounds={updateBounds}/>
    <LookoutsIndex lookouts={lookouts} fetchLookouts={fetchLookouts}/>
  </div>
)