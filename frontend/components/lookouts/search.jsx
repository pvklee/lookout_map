import React from 'react'
import LookoutsMap from './lookouts_map'
import LookoutsIndex from './lookouts_index'
import FilterForm from './filter_form'

export default ({lookouts, fetchLookouts, updateFilter}) => (
  <div>
    <LookoutsMap lookouts={lookouts} updateFilter={updateFilter} singleLookout={false}/>
    <FilterForm updateFilter={updateFilter}/>
    <LookoutsIndex lookouts={lookouts} fetchLookouts={fetchLookouts}/>
  </div>
)