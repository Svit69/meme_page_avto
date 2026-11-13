export function connectImageFallbacks(root) {
  root.querySelectorAll('.meme-thumbnail').forEach((image) => {
    const revealLoadedImage = () => {
      if (!image.naturalWidth) return;
      image.hidden = false;
      image.parentElement.querySelector('.placeholder-art').hidden = true;
    };
    image.addEventListener('load', revealLoadedImage, { once: true });
    if (image.complete) revealLoadedImage();
  });
}
