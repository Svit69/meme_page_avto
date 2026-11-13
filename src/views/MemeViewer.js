import { renderViewerMarkup } from './viewerMarkup.js';
import { ViewerController } from '../services/ViewerController.js';

export class MemeViewer {
  constructor(root, meme) { this.root = root; this.meme = meme; }

  render() {
    document.title = `${this.meme.details.title} — Мемотека`;
    this.root.innerHTML = renderViewerMarkup(this.meme);
    this.controller = new ViewerController(this.root, this.meme);
  }
}
