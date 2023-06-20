import { LatLng, map as Lmap, Map, Marker, marker, tileLayer } from 'leaflet';

let map: Map;

export const buildMap = (location: [number, number], initialZoom: number = 11) => {
  if (map) {
    return updateMapPositioning(location);
  }

  map = Lmap('map').setView(location, initialZoom);

  tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 0,
    maxZoom: 19,
  }).addTo(map);
};

export const updateMapPositioning = (location: [number, number]) => {
  map.panTo(new LatLng(location[0], location[1]));
};

export const addMarkerToMap = (position: [number, number]) => {
  return marker(position).addTo(map);
};

export const removeMarker = (marker: Marker<any> | null) => {
  marker?.removeFrom(map);
};
