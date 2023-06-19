import { Marker } from 'leaflet';
import { addMarkerToMap, removeMarker, updateMapPositioning } from './map.utils';

const TIME_INTERVAL = 1000 * 2;

let interval: number;

let marker: Marker<any> | null = null;

const speedElem = document.getElementById('speed') as HTMLDivElement;
const latitudeElem = document.getElementById('latitude') as HTMLDivElement;
const longitudeElem = document.getElementById('longitude') as HTMLDivElement;

const onPositionTrack = (position: GeolocationPosition) => {
  const { latitude, longitude, speed } = position.coords;

  speedElem.textContent = `${speed ? speed.toFixed(1) : 0}`;
  latitudeElem.innerHTML = 'Latitude';
  longitudeElem.innerHTML = 'Longitude';
  latitudeElem.innerHTML += `<br>${latitude.toFixed(1)}`;
  longitudeElem.innerHTML += `<br>${longitude.toFixed(1)}`;

  if (!marker) {
    marker = addMarkerToMap([latitude, longitude]);
  }

  updateMapPositioning(latitude, longitude);
};

const onPositionTrackError = (error: GeolocationPositionError) => {
  console.log('%c ERROR', 'color: red', error.message);
};

export const startTracker = () => {
  interval = setInterval(() => {
    navigator.geolocation.getCurrentPosition(onPositionTrack, onPositionTrackError, {
      enableHighAccuracy: true,
    });
  }, TIME_INTERVAL);
};

export const stopTracker = () => {
  clearInterval(interval);
  removeMarker(marker);
};
