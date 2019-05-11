import React from 'react'

export default class LookoutsIndex extends React.Component{
  render(){
    const {lookouts} = this.props;
    const lookoutsList = lookouts.map(lookout => <li key={`lookout${lookout.id}`}>{lookout.description}</li>)

    return(
      <div>
        <ul>
          {lookoutsList}
        </ul>
      </div>
    )
  }
}