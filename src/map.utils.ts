import { LatLng, map as Lmap, Map, Marker, marker, polyline, tileLayer } from 'leaflet';

export const positions: [number, number][] = [
  [38.74010102683749, -9.402698278710005],
  [38.733405982910746, -9.481490851325251],
  [38.69278968852866, -9.415827766539206],
  [38.68109610102377, -9.344233833521043],
  [38.70065818035994, -9.286212286109835],
  [38.7021318189273, -9.223212562483928],
  [38.69600431918323, -9.214634478311348],
];

let map: Map;

export const buildMap = (initialPosition: [number, number], initialZoom: number = 11) => {
  map = Lmap('map').setView(initialPosition, initialZoom);

  tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 0,
    maxZoom: 19,
  }).addTo(map);
};

export const drawRouteLine = (positions: [number, number][]) => {
  polyline(positions, { color: '#F00' }).addTo(map);
};

export const updateMapPositioning = (lat: number, long: number) => {
  map.panTo(new LatLng(lat, long));
};

export const addMarkerToMap = (position: [number, number]) => {
  return marker(position).addTo(map);
};

export const removeMarker = (marker: Marker<any> | null) => {
  marker?.removeFrom(map);
};
