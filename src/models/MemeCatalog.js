import { LandscapeMeme } from './LandscapeMeme.js';
import { PortraitMeme } from './PortraitMeme.js';

export class MemeCatalog {
  #memes;

  constructor(definitions) {
    this.#memes = definitions.map((definition) => definition.orientation === 'landscape'
      ? new LandscapeMeme(definition) : new PortraitMeme(definition));
  }

  getAll() { return [...this.#memes]; }
  findById(id) { return this.#memes.find((meme) => meme.details.id === id); }
}
