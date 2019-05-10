export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromLookout(lookout){
    let myLatLng = new google.maps.LatLng(lookout.lat, lookout.lng)
    let newMarker = new google.maps.Marker({
      position: myLatLng,
      title: "Hello!"
    })
    newMarker.setMap(this.map);
    Object.assign(this.markers, {[lookout.id]: newMarker});
  } 

  updateMarkers(lookouts){
    console.log('time to update');
    lookouts.forEach(lookout=>{
      if(!(lookout.id in this.markers)){
        this.createMarkerFromLookout(lookout);
      }
    })
  }
}