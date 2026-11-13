import { toggleFullscreen } from './fullscreen.js';

export function connectFullscreenControl(root, status) {
  const button = root.querySelector('#toggle-fullscreen');
  const updateFullscreenLabel = () => {
    button.setAttribute('aria-label', document.fullscreenElement
      ? 'Выйти из полноэкранного режима' : 'Включить полноэкранный режим');
  };
  button.addEventListener('click', () => toggleFullscreen(document.documentElement, button, status));
  document.addEventListener('fullscreenchange', updateFullscreenLabel);
  updateFullscreenLabel();
}
