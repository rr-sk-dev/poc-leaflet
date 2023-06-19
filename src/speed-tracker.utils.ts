const speedometerElem = document.getElementById('speedometer') as HTMLDivElement;
const speedElem = document.getElementById('speed') as HTMLDivElement;

let watchId: number = -1;

const onPositionChange = (position: GeolocationPosition) => {
  const speed = position.coords.speed || 0 + Date.now();

  console.log(speed);

  if (!speed) {
    return;
  }

  speedElem.textContent = `${position.coords.speed?.toFixed(1)}`;
};

const handlePositionError = (error: GeolocationPositionError) => {
  console.log('ERROR');
  console.log(error.message);
};

// export const startSpeedTracker = () => {
//   speedometerElem?.addEventListener('click', () => {
//     if (watchId < 0) {
//       watchId = navigator.geolocation.watchPosition(onPositionChange, handlePositionError);
//     } else {
//       navigator.geolocation.clearWatch(watchId);
//       watchId = -1;
//       speedElem.textContent = '0';
//     }
//   });
// };

export const startSpeedTracker = () => {
  watchId = navigator.geolocation.watchPosition(onPositionChange, handlePositionError);
};

export const stopSpeedTracker = () => {
  navigator.geolocation.clearWatch(watchId);
  watchId = -1;
  speedElem.textContent = '0';
};
