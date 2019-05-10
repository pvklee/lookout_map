import React from 'react'
import LookoutsMap from './lookouts_map'
import LookoutsIndex from './lookouts_index'

export default ({lookouts, fetchLookouts}) => (
  <div>
    <LookoutsMap lookouts={lookouts}/>
    <LookoutsIndex lookouts={lookouts} fetchLookouts={fetchLookouts}/>
  </div>
)