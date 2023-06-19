import { addMarkerToMap, buildMap, drawRouteLine, positions } from './map.utils';
import { startSpeedTracker, stopSpeedTracker } from './speed-tracker.utils';
import './style.css';

const showMap = true;

if (showMap) {
  buildMap(positions[0]);
  addMarkerToMap(positions[0]);
  addMarkerToMap(positions[positions.length - 1]);
  drawRouteLine(positions);
}

const startSpeedTrackerBtn = document.getElementById(
  'start-speed-tracker-btn'
) as HTMLButtonElement;
startSpeedTrackerBtn?.addEventListener('click', () => {
  startSpeedTrackerBtn.disabled = true;
  stopSpeedTrackerBtn.disabled = false;

  startSpeedTracker();
});

const stopSpeedTrackerBtn = document.getElementById('stop-speed-tracker-btn') as HTMLButtonElement;
stopSpeedTrackerBtn?.addEventListener('click', () => {
  startSpeedTrackerBtn.disabled = false;
  stopSpeedTrackerBtn.disabled = true;

  stopSpeedTracker();
});
