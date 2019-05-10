import React from 'react'
import MarkerManager from '../../util/marker_manager'

export default class LookoutsMap extends React.Component{
  componentDidMount(){
    const mapOptions = {
      center: {lat: 33.843099, lng: -118.344208}, //South Bay, CA
      zoom: 11
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.lookouts);
  }

  componentDidUpdate(prevProps){
    if(prevProps.lookouts !== this.props.lookouts){
      this.MarkerManager.updateMarkers(this.props.lookouts);
    }
  }


  render(){
    return(
      <div ref={map => this.mapNode = map} id="map-container"> // this ref gives us access to the map dom node
      </div>
    )
  }
}