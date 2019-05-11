export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromLookout(lookout){
    let myLatLng = new google.maps.LatLng(lookout.lat, lookout.lng)
    let newMarker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      lookoutId: lookout.id
    })
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