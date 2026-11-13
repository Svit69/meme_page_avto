export function calculateImageLayout(viewport, image, rotated) {
  const availableWidth = rotated ? viewport.height : viewport.width;
  const availableHeight = rotated ? viewport.width : viewport.height;
  const scale = Math.min(availableWidth / image.width, availableHeight / image.height);
  return { width: image.width * scale, height: image.height * scale };
}
