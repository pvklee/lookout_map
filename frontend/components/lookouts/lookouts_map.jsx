import React from 'react'
import MarkerManager from '../../util/marker_manager'

export default class LookoutsMap extends React.Component{
  componentDidMount(){
    const mapOptions = {
      center: {lat: 33.843099, lng: -118.344208}, //South Bay, CA
      center: {lat: 50, lng: -50}, //random location
      zoom: 11
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.listenForMove();
    this.MarkerManager.updateMarkers(this.props.lookouts);
  }

  componentDidUpdate(prevProps){
    if(prevProps.lookouts !== this.props.lookouts){
      this.MarkerManager.updateMarkers(this.props.lookouts);
    }
  }

  listenForMove(){
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {northEast: {lat: north, lng: east},
                      southWest: {lat: south, lng: west}};
      this.props.updateFilter(bounds);
    })
  }


  render(){
    return(
      <div ref={map => this.mapNode = map} id="map-container"> // this ref gives us access to the map dom node
      </div>
    )
  }
}