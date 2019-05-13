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
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));

    if(this.props.singleLookout){
      // this.map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});
      this.map.setOptions({draggable: false});
      const targetLookoutKey = Object.keys(this.props.lookouts)[0];
      const targetLookout = this.props.lookouts[targetLookoutKey];
      this.MarkerManager.updateMarkers([targetLookout])
      const latLng = new google.maps.LatLng(targetLookout.lat, targetLookout.lng);
      this.map.setCenter(latLng);
    } else {
      this.listenForMove();
      this.listenForMapClick();
      this.MarkerManager.updateMarkers(this.props.lookouts);
    }
  }

  componentDidUpdate(){
    if(!this.props.singleLookout){
      this.MarkerManager.updateMarkers(this.props.lookouts);
    }
  }

  handleMarkerClick(lookout){
    this.props.history.push(`/lookouts/${lookout.id}`)
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
      <div className="map-container" ref={map => this.mapNode = map} id="map-container">
      </div>
    )
  }
}

export default withRouter(LookoutsMap)