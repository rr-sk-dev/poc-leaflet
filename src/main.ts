import { buildMap, positions } from './map.utils';
import { startTracker, stopTracker } from './position.tracker';
import './style.css';

const menu: any = {
  maps: { enabled: true },
  speedTracker: { enabled: true },
  positionTracker: { enabled: true },
};

const gridRows = Object.keys(menu).filter((key) => menu[key].enabled).length;
console.log(gridRows);

const appElem = document.getElementById('app') as HTMLDivElement;
appElem.style.gridTemplateRows = `repeat(1fr, ${gridRows})`;

buildMap(positions[0]);

const startSpeedTrackerBtn = document.getElementById('start-trackers-btn') as HTMLButtonElement;
startSpeedTrackerBtn?.addEventListener('click', () => {
  startSpeedTrackerBtn.disabled = true;
  stopSpeedTrackerBtn.disabled = false;

  startTracker();
});

const stopSpeedTrackerBtn = document.getElementById('stop-trackers-btn') as HTMLButtonElement;
stopSpeedTrackerBtn?.addEventListener('click', () => {
  startSpeedTrackerBtn.disabled = false;
  stopSpeedTrackerBtn.disabled = true;

  stopTracker();
});
