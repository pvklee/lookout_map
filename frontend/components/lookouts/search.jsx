import React from 'react'
import LookoutsMap from './lookouts_map'
import LookoutsIndex from './lookouts_index'

export default ({lookouts, fetchLookouts, updateFilter}) => (
  <div>
    <LookoutsMap lookouts={lookouts} updateFilter={updateFilter}/>
    <LookoutsIndex lookouts={lookouts} fetchLookouts={fetchLookouts}/>
  </div>
)