import L from "leaflet";

export function addTileLayer(map) {
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
   attribution: `
  <a href="https://leafletjs.com">Leaflet</a> |
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> |
  Coded by <a href="https://github.com/Mikmame/ip-address-tracker" target="_blank">Mikmame</a> |
  &copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>
`,
  }).addTo(map);
}
