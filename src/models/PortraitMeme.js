import { Meme } from './Meme.js';

export class PortraitMeme extends Meme {
  shouldRotate() { return false; }
}
