const loadingElem = document.getElementById('on-loading') as HTMLDivElement;
const appElem = document.getElementById('app') as HTMLDivElement;

export const renderUi = () => {
  appElem.style.display = 'grid';
};

export const removeLoadingElem = () => {
  loadingElem.style.display = 'none';
};
