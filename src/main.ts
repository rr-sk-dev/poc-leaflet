import { addMarkerToMap, buildMap, drawRouteLine, positions } from './map.utils';
import { startTracker, stopTracker } from './position.tracker';
import './style.css';

buildMap(positions[0]);
addMarkerToMap(positions[0]);
addMarkerToMap(positions[positions.length - 1]);
drawRouteLine(positions);

const startSpeedTrackerBtn = document.getElementById(
  'start-speed-tracker-btn'
) as HTMLButtonElement;
startSpeedTrackerBtn?.addEventListener('click', () => {
  startSpeedTrackerBtn.disabled = true;
  stopSpeedTrackerBtn.disabled = false;

  startTracker();
});

const stopSpeedTrackerBtn = document.getElementById('stop-speed-tracker-btn') as HTMLButtonElement;
stopSpeedTrackerBtn?.addEventListener('click', () => {
  startSpeedTrackerBtn.disabled = false;
  stopSpeedTrackerBtn.disabled = true;

  stopTracker();
});
