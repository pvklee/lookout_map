import React from 'react'
import {Link} from 'react-router-dom'

export default class LookoutsIndex extends React.Component{
  render(){
    const {lookouts} = this.props;
    const lookoutsList = lookouts.map(lookout => <li key={`lookout${lookout.id}`}><Link to={`/lookouts/${lookout.id}`}>{lookout.description}</Link></li>)

    return(
      <div>
        <ul>
          {lookoutsList}
        </ul>
      </div>
    )
  }
}