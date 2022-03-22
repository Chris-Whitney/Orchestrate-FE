import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function Map() {
  const iconPerson = new L.Icon({
    iconUrl: require("../Utils/map-marker-icon-small-flat-iconset-paomedia-26370.png"),
    iconRetinaUrl: require("../Utils/map-marker-icon-small-flat-iconset-paomedia-26370.png"),
    iconSize: [35, 45],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  });

  return (
    <MapContainer
      center={[53.480759, -2.242631]}
      zoom={12}
      scrollWheelZoom={true}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {<Marker position={[53.47713, -2.24431]} icon={iconPerson} />}
    </MapContainer>
  );
}

export default Map;
