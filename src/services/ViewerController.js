import { calculateImageLayout } from './imageLayout.js';
import { connectFullscreenControl } from './fullscreenControl.js';

export class ViewerController {
  #rotation = null;
  constructor(root, meme) {
    this.meme = meme;
    this.stage = root.querySelector('.viewer-stage');
    this.image = root.querySelector('.viewer-image');
    this.status = root.querySelector('.viewer-hint');
    this.rotateButton = root.querySelector('#rotate-image');
    this.rotateButton.disabled = true;
    this.image.addEventListener('load', () => {
      this.image.hidden = false;
      root.querySelector('.viewer-loading').hidden = true;
      this.rotateButton.disabled = false;
      this.updateImageLayout();
    });
    this.image.addEventListener('error', () => {
      root.querySelector('.viewer-loading').hidden = true;
      root.querySelector('.viewer-placeholder').hidden = false;
      this.status.textContent = 'Добавьте изображение в папку public/memes';
    });
    this.rotateButton.addEventListener('click', () => {
      this.#rotation = !this.isRotated;
      this.updateImageLayout();
    });
    connectFullscreenControl(root, this.status);
    this.observer = new ResizeObserver(() => this.updateImageLayout());
    this.observer.observe(this.stage);
  }
  get viewport() { return { width: this.stage.clientWidth, height: this.stage.clientHeight }; }
  get dimensions() { return { width: this.image.naturalWidth, height: this.image.naturalHeight }; }
  get isRotated() { return this.#rotation ?? this.meme.shouldRotate(this.viewport, this.dimensions); }
  updateImageLayout() {
    if (!this.image.naturalWidth) return;
    const layout = calculateImageLayout(this.viewport, this.dimensions, this.isRotated);
    Object.assign(this.image.style, { width: `${layout.width}px`, height: `${layout.height}px`, transform: `rotate(${this.isRotated ? 90 : 0}deg)` });
    this.rotateButton.setAttribute('aria-pressed', String(this.isRotated));
    this.status.textContent = this.isRotated ? 'Поворот на 90° · Картинка целиком' : 'Картинка целиком, без обрезки';
  }
}
