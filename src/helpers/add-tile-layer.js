import L from "leaflet";

export function addTileLayer(map) {
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
   attribution: `
  <a href="https://leafletjs.com">Leaflet</a> |
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a> |
  Coded by <a href="#">mikmame</a> |
  &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>
`,
  }).addTo(map);
}
