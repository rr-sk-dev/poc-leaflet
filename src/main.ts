import { Marker } from 'leaflet';
import {
  startGeolocationListener,
  stopGeolocationListener,
  updateLocationElements,
  updateSpeedometer,
} from './geolocation/geolocation';
import { addMarkerToMap, buildMap, removeMarker } from './map.utils';
import './style.css';

let watchId = -1;
let marker: Marker<any> | null = null;

const onGeolocationChange = (position: GeolocationPosition) => {
  const { latitude, longitude, speed, accuracy } = position.coords;

  console.group(position.timestamp);
  console.log('latitude', latitude.toFixed(1));
  console.log('longitude', longitude.toFixed(1));
  console.log('speed', speed?.toFixed(1));
  console.log('accuracy', accuracy);
  console.groupEnd();

  const location: [number, number] = [Number(latitude.toFixed(1)), Number(longitude.toFixed(1))];
  updateLocationElements(location);

  updateSpeedometer(speed);

  buildMap(location);

  if (marker) {
    removeMarker(marker);
  }

  marker = addMarkerToMap(location);
};

const startLocationService = () => {
  watchId = startGeolocationListener(onGeolocationChange);
};

const menu: any = {
  maps: { id: 'map', enabled: true },
  speedTracker: { id: 'speed-tracker', enabled: true },
  positionTracker: { id: 'position-tracker', enabled: true },
};

const gridRows = Object.keys(menu).filter((key) => menu[key].enabled).length;

const appElem = document.getElementById('app') as HTMLDivElement;
appElem.style.gridTemplateRows = `repeat(1fr, ${gridRows})`;

const startSpeedTrackerBtn = document.getElementById('start-trackers-btn') as HTMLButtonElement;
startSpeedTrackerBtn?.addEventListener('click', () => {
  startSpeedTrackerBtn.disabled = true;
  stopSpeedTrackerBtn.disabled = false;

  startLocationService();
});

const stopSpeedTrackerBtn = document.getElementById('stop-trackers-btn') as HTMLButtonElement;
stopSpeedTrackerBtn?.addEventListener('click', () => {
  startSpeedTrackerBtn.disabled = false;
  stopSpeedTrackerBtn.disabled = true;

  stopGeolocationListener(watchId);
});
