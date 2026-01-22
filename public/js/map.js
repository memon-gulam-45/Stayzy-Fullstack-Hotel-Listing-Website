const coords = [...listing.geometry.coordinates].reverse();

const map = L.map("map").setView(coords, 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
}).addTo(map);

const customIcon = L.icon({
  iconUrl: "../pin.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const marker = L.marker(coords, { icon: customIcon }).addTo(map);

marker.bindPopup(`<b>${listing.location}</b><br>Exact location will be provided after booking`);

marker.on("mouseover", () => marker.openPopup());
marker.on("mouseout", () => marker.closePopup());
