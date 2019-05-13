export default class MarkerManager {
  constructor(map, handleMarkerClick) {
    this.map = map;
    this.markers = {};
    this.handleMarkerClick = handleMarkerClick;
  }

  createMarkerFromLookout(lookout){
    let myLatLng = new google.maps.LatLng(lookout.lat, lookout.lng)
    let newMarker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      lookoutId: lookout.id,
    })
    newMarker.addListener('click', () => this.handleMarkerClick(lookout))
    Object.assign(this.markers, {[lookout.id]: newMarker});
  } 

  removeMarker(marker){
    this.markers[marker.lookoutId].setMap(null);
    delete this.markers[marker.lookoutId];
  }

  updateMarkers(lookouts){
    const lookoutsObject = {}
    lookouts.forEach(lookout => lookoutsObject[lookout.id] = lookout);

    lookouts
      .filter(lookout => !this.markers[lookout.id])
      .forEach(newLookout => this.createMarkerFromLookout(newLookout))

    Object.keys(this.markers)
      .filter(lookoutId => !lookoutsObject[lookoutId])
      .forEach(lookoutId => this.removeMarker(this.markers[lookoutId]))
  }
}