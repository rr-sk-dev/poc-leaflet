const latitudeElem = document.getElementById('latitude') as HTMLDivElement;
const longitudeElem = document.getElementById('longitude') as HTMLDivElement;
const speedElem = document.getElementById('speed') as HTMLDivElement;

export const updateSpeedometer = (speed: number | null) => {
  speedElem.textContent = `${speed ? speed.toFixed(1) : '0'}`;
};

export const updateLocationElements = (location: [number, number]) => {
  latitudeElem.innerHTML = 'Latitude';
  latitudeElem.innerHTML += `<br>${location[0]}°`;
  longitudeElem.innerHTML = 'Longitude';
  longitudeElem.innerHTML += `<br>${location[1]}°`;
};

export const getCurrentLocationData = async () => {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (err) => {
        console.log('[ERROR]');
        console.log(err);
        console.log();
        reject(err);
      },
      { enableHighAccuracy: true }
    );
  });
};

export const startGeolocationListener = (onPositionChange: PositionCallback) => {
  return navigator.geolocation.watchPosition(
    onPositionChange,
    (err) => {
      console.log('[ERROR]');
      console.log(err);
      console.log();
      throw err;
    },
    { enableHighAccuracy: true }
  );
};

export const stopGeolocationListener = (watchId: number) =>
  navigator.geolocation.clearWatch(watchId);
