import L from "leaflet";
let currentTileLayer;
export function addTileLayer(map) {
   if (currentTileLayer) {
    map.removeLayer(currentTileLayer);
  }

  currentTileLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attributionControl: false 
  }).addTo(map);

  
  L.control.attribution({
    prefix: false 
  }).addTo(map);

  map.attributionControl.setPrefix(false); 

  map.attributionControl.addAttribution(`
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> |
    Coded by <a href="https://github.com/Mikmame/ip-address-tracker" target="_blank">mikmame</a> |
    &copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>
  `);
}
