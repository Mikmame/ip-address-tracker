import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { validateIp, addTileLayer, getAddress, addOffset } from "./helpers";

const iconUrl = new URL(
  "./images/spotlight-poi-dotless_hdpi.png",
  import.meta.url
).href;

const ipInput = document.querySelector(".search-bar__input");
const btn = document.querySelector("button");

const ipInfo = document.querySelector("#ip");
const locationInfo = document.querySelector("#location");
const timezoneInfo = document.querySelector("#timezone");
const ispInfo = document.querySelector("#isp");

btn.addEventListener("click", getData);
ipInput.addEventListener("keydown", handleKey);

const markerIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: [30, 40],
});
const mapArea = document.querySelector(".map");

let map, marker;

window.addEventListener("load", () => {
  fetch("https://api.ipify.org?format=json")
    .then((res) => res.json())
    .then((data) => {
      ipInput.value = data.ip;
      return getAddress(data.ip);
    })
    .then(setInfo)
    .catch((err) => console.error("Error during initial IP fetch:", err));
});

function getData() {
  const ip = ipInput.value.trim();
  const errorDiv = document.getElementById("error");

  if (ip && validateIp(ip)) {
    errorDiv.classList.remove("visible");
    getAddress(ip).then(setInfo);
  } else {
    errorDiv.textContent = "Please enter a valid IP address.";
    errorDiv.classList.add("visible");
  }
}

function handleKey(e) {
  if (e.key === "Enter") {
    getData();
  }
}


function setInfo(mapData) {
  const { lat, lng, country, region, timezone } = mapData.location;

  ipInfo.innerText = mapData.ip;
  locationInfo.innerText = `${country}, ${region}`;
  timezoneInfo.innerText = timezone;
  ispInfo.innerText = mapData.isp;

  if (!map) {
    map = L.map(mapArea, {
      center: [lat, lng],
      zoom: 13,
    });

    addTileLayer(map);

    marker = L.marker([lat, lng], { icon: markerIcon }).addTo(map);

    mapArea.classList.add("visible");
  } else {
    marker.setLatLng([lat, lng]);
    map.setView([lat, lng]);
  }

  if (matchMedia("(max-width: 1023px)").matches) {
    addOffset(map);
  }
}
