export async function enterFullscreen(container) {
  if (document.fullscreenElement || !container.requestFullscreen) return false;
  try {
    await container.requestFullscreen();
    return true;
  } catch {
    return false;
  }
}
