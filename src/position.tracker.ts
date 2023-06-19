const TIME_INTERVAL = 1000 * 2;

let interval: number;

const speedElem = document.getElementById('speed') as HTMLDivElement;
const latitudeElem = document.getElementById('latitude') as HTMLDivElement;
const longitudeElem = document.getElementById('longitude') as HTMLDivElement;

const onPositionTrack = (position: GeolocationPosition) => {
  const { latitude, longitude, speed } = position.coords;
  speedElem.textContent = `${speed ? speed.toFixed(1) : 0}`;
  latitudeElem.textContent = `${latitude.toFixed(1)}`;
  longitudeElem.textContent = `${longitude.toFixed(1)}`;
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
};
