export async function toggleFullscreen(container, button, status) {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (container.requestFullscreen) await container.requestFullscreen();
    else status.textContent = 'Этот браузер не поддерживает полноэкранный режим';
  } catch {
    status.textContent = 'Не удалось включить полноэкранный режим';
  }
  button.setAttribute('aria-label', document.fullscreenElement
    ? 'Выйти из полноэкранного режима' : 'Включить полноэкранный режим');
}
