import { Meme } from './Meme.js';

export class LandscapeMeme extends Meme {
  shouldRotate(viewport, image) {
    const normalScale = Math.min(viewport.width / image.width, viewport.height / image.height);
    const rotatedScale = Math.min(viewport.height / image.width, viewport.width / image.height);
    return viewport.width < viewport.height && rotatedScale > normalScale;
  }
}
