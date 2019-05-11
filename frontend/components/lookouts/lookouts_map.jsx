import React from 'react'
import MarkerManager from '../../util/marker_manager'
import {withRouter} from 'react-router'

class LookoutsMap extends React.Component{
  componentDidMount(){
    const mapOptions = {
      center: {lat: 33.843099, lng: -118.344208}, //South Bay, CA
      // center: {lat: 50, lng: -50}, //random location
      zoom: 11
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.listenForMove();
    this.listenForMapClick();
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
      this.props.updateFilter(bounds, 'bounds');
    })
  }

  listenForMapClick(){
    google.maps.event.addListener(this.map, 'click', e => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      this.props.history.push({
        pathname: 'lookouts/new',
        search: `lat=${lat}&lng=${lng}`
      })
    })
  }


  render(){
    return(
      <div ref={map => this.mapNode = map} id="map-container">
      </div>
    )
  }
}

export default withRouter(LookoutsMap)