import { MemeViewer } from '../views/MemeViewer.js';
import { enterFullscreen } from './fullscreen.js';

export class GalleryNavigation {
  #root;
  #catalog;

  constructor(root, catalog) {
    this.#root = root;
    this.#catalog = catalog;
    root.addEventListener('click', (event) => this.openSelectedMeme(event));
  }

  openSelectedMeme(event) {
    const card = event.target.closest('.meme-card');
    if (!card || event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const destination = new URL(card.href);
    const meme = this.#catalog.findById(destination.pathname.split('/')[2]);
    if (!meme) return;
    event.preventDefault();
    // Keep the fullscreen document alive and replace the gallery history entry.
    window.history.replaceState(null, '', destination.pathname);
    new MemeViewer(this.#root, meme).render();
    void enterFullscreen(document.documentElement);
  }
}
