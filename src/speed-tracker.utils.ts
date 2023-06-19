// const speedometerElem = document.getElementById('speedometer') as HTMLDivElement;
const speedElem = document.getElementById('speed') as HTMLDivElement;

let watchId: number = -1;

const onPositionChange = (position: GeolocationPosition) => {
  const speed = position.coords.speed;

  console.log('onPositionChange', position.coords);

  if (!speed) {
    return;
  }

  speedElem.textContent = `${speed.toFixed(1)}`;
};

const handlePositionError = (error: GeolocationPositionError) => {
  console.log('ERROR');
  console.log(error.message);
};

export const startSpeedTracker = () => {
  watchId = navigator.geolocation.watchPosition(onPositionChange, handlePositionError);
};

export const stopSpeedTracker = () => {
  navigator.geolocation.clearWatch(watchId);
  watchId = -1;
  speedElem.textContent = '0';
};
